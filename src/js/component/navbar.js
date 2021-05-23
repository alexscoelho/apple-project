import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="black-box-icon">
				<Link to="/">
					<i className="fab fa-apple fa-2x apple" />
				</Link>
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ml-auto">
					<Link className="mr-5 nav-link " to="/phone">
						iPhone
					</Link>
					<Link className="mr-5 nav-link " to="/mackbook">
						MackBook Pro
					</Link>
					<Link className="mr-5 nav-link " to="/watch">
						Watch
					</Link>
					<Link className="mr-5" to="/">
						<div className="btn notify-button">Notify me</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};
