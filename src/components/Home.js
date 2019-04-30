import { Link, Router } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Dashboard from './Dashboard'
import Requests from './Requests'
import Timeline from './Timeline'

const StyledHome = styled.div`
	display: flex;
	flex-flow: column;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color: white;
	background-color: #383838;
	
	field {
		display: block;
		label {
			display: block;
			font-size: 20px;
		}
		input, textarea {
			display: block;
			width: 100%;
			color: white;
			background: #121212;
			border: none;
		    padding: 15px 20px;
		    font-size: 21px;
		    margin: 10px 0;
		    outline: none;
	        box-sizing: border-box;
		}
	}
	button {
		background: #9b23b6;
	    border: none;
	    color: white;
	    padding: 10px 15px;
	    font-size: 15px;
	    display: inline-block;
	    outline: none;
	    cursor: pointer;
	}
`
const StyledHeader = styled.div`
	flex: 0 0 80px;
	background-color: #090909;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
`
const StyledLogo = styled.span`
	color: white;
	font-size: 30px;
	sub {
		font-size: 11px;
		vertical-align: baseline;
		color: #9b23b6;
		&:before {
			content: ' [ ';
		}
		&:after {
			content: ' ] ';
		}
	}
`
const StyledAccount = styled.div`
	color: white;
	button {
		margin: 0 10px;
	}

`
const StyledLayout = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-flow: row;
`
const StyledMain = styled.main`
	position: relative;
	flex: 1;
	background-color: #383838;
	
	> div {
		position: absolute;
		overflow: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 15px;
	}
`
const StyledNav = styled.nav`
	flex: 0 0 300px;
	background-color: #262626;
	padding: 10px 0;
	
	a {
		position: relative;
		display: flex;
		height: 70px;
		padding: 0 30px;
		font-weight: 600;
		flex-flow: column;
		justify-content: center;
		color: white;
		outline: none;
		
		.fa {
			color: #838383;
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translate(0, -50%);
		}
		
		&, & * {
			cursor: pointer;
			transition: all 300ms ease;
			text-decoration: none !important;
		}
		&:hover {
			background-color: #1c1c1c;
		color: white;
		}
		&.selected {
			background-color: #141414;
			.fa {
				color: white;
			}
		}
		label {
			margin: 0;
		}
		span {
			font-size: 11px;
			color: #838383;
			font-weight: 400;
		}
	}
`

const StyledLink = props => {
	const selected = props.to === window.location.pathname
	return <Link to={ props.to } className={ selected ? 'selected' : '' }>
		<label>{ props.title }</label>
		<span>{ props.desc }</span>
		<i className="fa fa-angle-right"/>
	</Link>
}

const StyledLoginBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%); 
	
	field {
		display: block;
		text-align: center;
		
		label {
			display: none;
			color: white;
		}
	}
`

function HomeScreen() {
	return <StyledLayout>
		<StyledNav>
			<StyledLink to="/" title="Dashboard" desc="Maps & Number"/>
			<StyledLink to="/requests" title="Requests" desc="Hear from victims"/>
			<StyledLink to="/announcement" title="Announcement" desc="Broadcast messages"/>
			<StyledLink to="/timeline" title="Timeline" desc="Event timeline"/>
		</StyledNav>
		<StyledMain>
			<Router>
				<Dashboard path="/"/>
				<Requests path="/requests"/>
				<Timeline path="/timeline"/>
				<Announcement path="/announcement"/>
			</Router>
		</StyledMain>
	</StyledLayout>
}

function LoginScreen(props) {
	let username, password
	function login() {
		if (username && password) props.onLogin(username)
	}
	return <StyledLayout>
		<StyledLoginBox>
			<field>
				<input placeholder="Username" onChange={ e => (username = e.target.value) }
				       onKeyDown={ e => (e.key === 'Enter' && login()) }/>
			</field>
			<field>
				<input type="password" placeholder="Password" onChange={ e => (password = e.target.value) }
				       onKeyDown={ e => (e.key === 'Enter' && login()) }/>
			</field>
			<field>
				<button onClick={ login }>Login</button>
			</field>
		</StyledLoginBox>
	</StyledLayout>
}

export default class Home extends React.Component {
	state = JSON.parse(localStorage.getItem('besafe-state') || '{}')

	componentDidUpdate() {
		localStorage.setItem('besafe-state', JSON.stringify(this.state))
	}

	render() {
		return (
			<StyledHome>
				<StyledHeader>
					<StyledLogo>
						Be<strong>SAFE</strong><sub>Disater Alert System</sub>
					</StyledLogo>
					{ this.state.login && <StyledAccount>
						Hi, { this.state.login }
						<button onClick={ () => this.setState({ login: false }) }>Logout</button>
					</StyledAccount> }
				</StyledHeader>
				{ this.state.login ? <HomeScreen/> : <LoginScreen onLogin={ login => this.setState({ login }) }/> }
			</StyledHome>
		)
	}
}