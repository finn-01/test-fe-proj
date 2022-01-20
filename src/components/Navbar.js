import React from "react";

const Navbar = () => {
	return (
		<div className="box flex flex-row justify-between justify-items-center bg-black ">
			<div>
				<img className="navbar-img" src="../images/logo.png" />
			</div>
			<div className="flex flex-row">
				<ul className="flex flex-row">
					<li className="navbar-padding">
						<a className="navbar-text">Introduction</a>
					</li>
					<li className="navbar-padding">
						<a className="navbar-text">Solution</a>
					</li>
					<li className="navbar-padding">
						<a className="navbar-text">Rate Plan</a>
					</li>
				</ul>
				<div className="line"></div>
				<ul className="flex flex-row">
					<li className="navbar-padding">
						<a className="navbar-text">Login</a>
					</li>
					<li className="navbar-padding">
						<a className="navbar-text">Apply for free user</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
