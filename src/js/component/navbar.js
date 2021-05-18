import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
			<div className="black-box-icon">
				<Link to="/">
					<i className="fab fa-apple fa-2x apple" />
				</Link>
			</div>
			<div className="ml-auto">
				<Link className="mr-5" to="/phone">
					iphone
				</Link>
				<Link className="mr-5" to="/mackbook">
					MackBook Pro
				</Link>
				<Link className="mr-5" to="/watch">
					Watch
				</Link>
				<Link className="mr-5" to="/watch">
					<div className="btn btn-primary">Notify me</div>
				</Link>
			</div>
		</nav>
	);
};
