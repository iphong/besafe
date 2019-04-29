import React from 'react'
import { addAnnouncement } from '../containers/announcements'
import { navigate } from '@reach/router'

const annountURL = 'http://besafe-webhook.herokuapp.com/notify'

export default function Announcement() {
	const titleRef = React.createRef()
	const messageRef = React.createRef()
	function send() {
		const title = titleRef.current.value
		const message = messageRef.current.value
		if (title && message) {
			addAnnouncement(title, message)
			titleRef.current.value = ''
			messageRef.current.value = ''
			// alert('announcement sent')
			const req = new XMLHttpRequest()
			req.open('POST', annountURL, true)
			req.setRequestHeader('Content-Type', 'application/json')
			req.send(JSON.stringify({ payload: message, type: 'message' }))
			req.addEventListener('loadend', () => {
				console.log('message send')
				navigate('/timeline')
			})
		}
	}
	return (
		<div>
			<field>
				<label>Title</label>
				<input ref={titleRef} />
			</field>
			<field>
				<label>Message</label>
				<textarea ref={messageRef} rows={10} />
			</field>
			<field>
				<button onClick={send}>Broadcase Message</button>
			</field>
		</div>
	)
}