import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { IoWatch } from "react-icons/io5";

export const Home = () => (
	<>
		<div className="apple-container-home">
			<i className="fab fa-apple fa-2x fa-10x big-logo-home" />
			<h1 className="message-home">Welcome to Apple</h1>
		</div>
		<p className="message-home2">see our products</p>
		<ul className="vertical-icon-list ">
			<li>
				<Link to="/phone">
					<i className="fas fa-mobile-alt" />
				</Link>
			</li>
			<li>
				<Link to="/mackbook">
					<i className="fas fa-laptop" />
				</Link>
			</li>
			<li>
				<Link to="/watch">
					<IoWatch />
				</Link>
			</li>
		</ul>
	</>
);
