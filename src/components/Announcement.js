import React from 'react'

export default function Announcement() {
	return (
		<div>
			<field>
				<label>Title</label>
				<input />
			</field>
			<field>
				<label>Message</label>
				<textarea rows={10} />
			</field>
			<field>
				<button>Broadcase Message</button>
			</field>
		</div>
	)
}