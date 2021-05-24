import React from "react";
import { Link } from "react-router-dom";
import { IoWatch } from "react-icons/io5";
import mackbook from "../../img/shutterstock_-1.png";
import mackbook2 from "../../img/mackbook-4.png";
import desktop from "../../img/shutterstock_-2.png";
import "../../styles/mackbook.scss";
import { motion } from "framer-motion";

export const Mackbook = () => {
	return (
		<>
			<motion.div
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: -300, opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<div className="jumbotron jumbotron-fluid mackbook-body">
					<div className="container">
						<div className="row">
							<div className="col-md-5 inner-container">
								<h4 className=" text-info product">MackBook Pro</h4>
								<p className=" text-danger shipping-info">Starts shipping MM-DD-YYY</p>
								<h1 className="display-4 text-light title">More power. More pro</h1>
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
							<div className="col-md-5 image-box">
								<img
									style={{ height: 300 }}
									src={mackbook2}
									className="img-fluid mackbook"
									alt={mackbook}
								/>
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
						<div className="col-md-5 bg-light subscribe-now">
							<h1 className="pb-2">Subscribe Now</h1>
							<form className="form-inline">
								<input
									type="password"
									className="form-control mr-2 "
									id="inputPassword2"
									placeholder="Password"
								/>
								<button type="submit" className="btn btn-dark">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
