import React from "react";
import "../../styles/intro.scss";
import { Link } from "react-router-dom";

export const Intro = () => (
	<>
		<nav className="navbar navbar-light intro-nav justify-content-center">
			<Link to="/home">
				<i className="fab fa-apple fa-2x apple" />
			</Link>
		</nav>
		<div className="apple-container">
			<div className="logo">
				<p className="message">New products comming this summer</p>
			</div>
			<h1>2019</h1>
		</div>
	</>
);
