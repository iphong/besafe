import React from 'react'

const requestURL = 'http://besafe-webhook.herokuapp.com/requests'
const pollingTime = 5000
let mounted = false
let data = []

function fetchData() {
	if (mounted) {
		const req = new XMLHttpRequest()
		req.open('GET', requestURL, true)
		req.send()
		req.addEventListener('loadend', () => {
			try {
				data = JSON.parse(req.responseText).data
			} catch(e) {
				console.warn('failed to parse data')
			}
			if (mounted) {
				mounted.forceUpdate()
			}
			setTimeout(fetchData, pollingTime)
		})
	}
}

export default class Requests extends React.Component {
	state = {
		search: ''
	}
	componentDidMount() {
		mounted = this
		fetchData()
	}
	componentWillUnmount() {
		mounted = null
	}
	render() {
		let items = data
		if (this.state.search) {
			items = items.filter(item => {
				if (item.message.toLowerCase().indexOf(this.state.search) > -1) {
					return true
				}
				return false
			})
		}
		return <div>
			<h3>Civic Requests</h3>
			<field>
				<input placeholder="Filter results" defaultValue={this.state.search} onChange={e => this.setState({ search: e.target.value })} />
			</field>
			<table className="table table-sm table-dark">
				<thead>
					<th>Name</th>
					<th>Message</th>
					<th>Time</th>
					<th>Location</th>
				</thead>
				{items.length ? <tbody>
					{items.map((item, index) => {
						return <tr key={index}>
							<td>{item.name}</td>
							<td>{item.message}</td>
							<td>{new Date(item.timestamp).toDateString()}</td>
							<td>
								<a href={`https://www.google.com/maps/@${item.location.lat},${item.location.long}z`} target="_blank" rel="noopener noreferrer">
									<i className="fa fa-map-marker-alt" />
								</a>
								{` ${item.location.address}`}
							</td>
						</tr>
					})}
				</tbody> : <tbody>
				<td colSpan={4} style={{ textAlign: 'center' }}>
					<i className="fa fa-spin fa-circle-notch" />
				</td>
				</tbody>}
			</table>
		</div>
	}
}