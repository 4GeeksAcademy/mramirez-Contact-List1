import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navBar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 m-2">
			<Link to="/">
				<span className="navbar-title">Contact List Miguel</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add-contacts">
					<button className="button-navbar">Add New Contacts !</button>
				</Link>
			</div>
		</nav>
	);
};
