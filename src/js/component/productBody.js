import React from "react";
import { IoWatch } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductBody = ({ product, title, description, other, productImage, productImage2 }) => {
	return (
		<div className="jumbotron jumbotron-fluid product-body">
			<div className="content-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<p className="text-danger product">{product}</p>
							<h1 className="display-4 product">{title}</h1>
							<p className="lead ">{description}</p>
							<p className="text-danger">{other}</p>
						</div>
						<div className="col-sm-6 col-md-6 d-flex align-items-center right-side-icons">
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

				<div className="col-md-5 product-image">
					<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="d-block w-50" src={productImage} alt="First slide" />
							</div>
							<div className="carousel-item">
								<img className="d-block w-50" src={productImage2} alt="Second slide" />
							</div>
						</div>
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
	productImage: PropTypes.string,
	productImage2: PropTypes.string
};
