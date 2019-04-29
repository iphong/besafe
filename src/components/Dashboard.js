import React from 'react'

export default function Dashboard() {
	return (
		<div style={{ background: 'white' }}>
			<div className="row">
				<div className="col-lg-12">
					<iframe title="chart" width="100%" height="800" frameBorder="0" scrolling="no"
					        src="//plot.ly/~lamhoangtung/10.embed"></iframe>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<iframe title="chart" width="100%" height="500" frameBorder="0" scrolling="no"
					        src="//plot.ly/~lamhoangtung/30.embed"></iframe>
				</div>
				<div className="col-lg-6">
					<iframe title="chart" width="100%" height="500" frameBorder="0" scrolling="no"
					        src="//plot.ly/~lamhoangtung/12.embed"></iframe>
				</div>
			</div>
		</div>
	)
}