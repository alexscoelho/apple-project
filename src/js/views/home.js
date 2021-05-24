import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { IoWatch } from "react-icons/io5";

export const Home = () => (
	<>
		<div className="apple-container-home">
			<div className="logo-home">
				<h2 className="message-home">Welcome to Apple</h2>
			</div>
			<p className="message-home2 ">See Our Products</p>
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
		</div>
	</>
);
