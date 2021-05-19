import React from "react";
import "../../styles/watch.scss";
import { IoWatch } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductBody = ({ product, title, description, other, productImage }) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<p className="text-danger">{product}</p>
						<h1 className="display-4 ">{title}</h1>
						<p className="lead ">{description}</p>
						<p className="text-danger">{other}</p>
					</div>
					<div className="col-md-5">
						<img src={productImage} className="img-fluid" alt={productImage} />
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
	);
};

ProductBody.propTypes = {
	product: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	other: PropTypes.string,
	productImage: PropTypes.string
};
