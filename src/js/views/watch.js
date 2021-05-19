import React from "react";
import "../../styles/watch.scss";
import blackWatch from "../../img/Black Watch-1.png";
import { IoWatch } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Watch = () => (
	<>
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<p className="text-danger">Apple Watch</p>
						<h1 className="display-4 ">Change starts within.</h1>
						<p className="lead ">
							This is a modified jumbotron that occupies the entire horizontal space of its parent.
						</p>
						<p className="text-danger">Starts shipping MM-DD-YYY</p>
					</div>
					<div className="col-md-5">
						<img src={blackWatch} className="img-fluid" alt={blackWatch} />
					</div>
					<div className="col-sm d-flex align-items-center">
						<ul className="right-side-icons">
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
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-6">
					<h1>From $699</h1>
					<p className="text-danger">Buy Now </p>
				</div>
				<div className="col-6 d-flex justify-content-center">
					<i className="far fa-circle mr-5" />
					<i className="fas fa-circle" />
				</div>
			</div>
		</div>
	</>
);
