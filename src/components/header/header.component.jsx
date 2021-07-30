import React from "react";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/csk.svg";
import { auth } from "../../firebase/firebase.utils";

import { withRouter, Link } from "react-router-dom";

const Header = ({currentUser}) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{
				currentUser
				?
				<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
				:
				<Link className="option" to="/SignIn">
					SIGN IN
				</Link>
				}
			</div>
		</div>
	);
};

export default withRouter(Header);
