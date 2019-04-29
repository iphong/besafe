import React from 'react'
import styled from 'styled-components'

import { announcements } from '../containers/announcements'

export default function Timeline() {
	return (
		<div>
			{announcements.length ? announcements.map(item => <TimelineItem>
				<div className="date">
					<div><strong>{item.date}</strong></div>
					<div>{item.time}</div>
				</div>
				<div className="message">
					<div><strong>{item.title}</strong></div>
					<div>{item.message}</div>
				</div>
			</TimelineItem>) : 'No Announcements'}
		</div>
	)
}
const TimelineItem = styled.div`
	display: flex;
	align-content: stretch;
	margin-bottom: 5px;
	
	.date {
		flex: 0 0 200px;
		border-right: 1px solid white;
		padding: 10px;
		opacity: 0.5;
        font-size: 12px;
        text-align: right;
	}
	.message {
		padding: 10px;
        font-size: 12px;
	}
`