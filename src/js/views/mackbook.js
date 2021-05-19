import React from "react";
import { Link } from "react-router-dom";
import { IoWatch } from "react-icons/io5";
import mackbook from "../../img/shutterstock_-1.png";
import desktop from "../../img/shutterstock_-2.png";

export const Mackbook = () => {
	return (
		<>
			<div className="jumbotron jumbotron-fluid bg-dark">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<p className=" text-info">MackBook Pro</p>
							<p className="lead text-danger">Starts shipping MM-DD-YYY</p>
							<h1 className="display-4 text-light ">More power. More pro</h1>
							<div className="d-flex">
								<div className="mr-5">
									<h1>8-core</h1>
									<p>Intel processor</p>
								</div>
								<div>
									<h1>32 GB</h1>
									<p>Memory</p>
								</div>
							</div>
						</div>
						<div className="col-md-5">
							<img src={mackbook} className="img-fluid" alt={mackbook} />
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
					<div className="col-md-2">
						<p className="text-danger">Buy Now </p>
					</div>
					<div className="col-md-5">
						<img src={desktop} className="img-fluid" alt={desktop} />
					</div>
					<div className="col-md-5">
						<h1>Subscribe Now</h1>
						<form className="form-inline">
							<input
								type="password"
								className="form-control"
								id="inputPassword2"
								placeholder="Password"
							/>
							<button type="submit" className="btn btn-primary ">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
