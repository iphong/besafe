import React from 'react'
import styled from 'styled-components'

const $God = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #1e1e1e;
	display: flex;
`

export default function God() {
	return <$God>Disaster Control</$God>
}