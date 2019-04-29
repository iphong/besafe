import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: 200px;
	border: 3px solid white;
	margin: 10px;
	font-size: 18px;
	font-weight: bold;
	border-radius: 10px;
	cursor: pointer;
	
	&:hover {
		box-shadow: 0 0 20px rgba(255,255,255,0.5), inset 0 0 20px rgba(255,255,255,0.5);
		text-shadow: 0 0 10px rgba(255,255,255,0.5);
	}
`


const StyledGod = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #030303;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: white;
`

export default function God() {
	return <StyledGod>
		<StyledButton>Tsunami</StyledButton>
		<StyledButton>Huricane</StyledButton>
		<StyledButton>Earth Quake</StyledButton>
	</StyledGod>
}