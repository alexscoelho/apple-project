import React from "react";
import "../../styles/intro.scss";
import { Link } from "react-router-dom";

export const Intro = () => (
	<>
		<nav className="navbar navbar-light intro-nav justify-content-center">
			<Link to="/">
				<i className="fab fa-apple fa-2x apple" />
			</Link>
		</nav>
		<div className="apple-container">
			<i className="fab fa-apple fa-2x fa-10x big-logo" />
			<p className="message">New products comming this summer</p>
			<h1 className="date">2019</h1>
		</div>
	</>
);
