import React from "react";
import { ProductBody } from "../component/productBody";
import goldPhone from "../../img/apple-iphonexs-max-gold-back-2.png";
import smallPhone1 from "../../img/apple-iphonexs-max-gold.png";
import smallPhone2 from "../../img/apple-iphonexs-max-gold-back-3.png";

export const Phone = () => (
	<>
		<ProductBody
			product="iPhone"
			title="The ultimate iPhone"
			description="This is a modified jumbotron that occupies the entire horizontal space of its parent."
			other="Starts shipping MM-DD-YYY"
			productImage={goldPhone}
		/>
		<div className="container">
			<div className="row">
				<div className="col-3">
					<h1>From $699</h1>
					<p className="text-danger">Buy Now </p>
				</div>
				{/* <div className="col-6">
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
							<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={smallPhone1} className="d-block " alt={smallPhone1} />
							</div>
							<div className="carousel-item">
								<img src={smallPhone2} className="d-block " alt="..." />
							</div>
						</div>
						<a
							className="carousel-control-prev"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#carouselExampleIndicators"
							role="button"
							data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div> */}
			</div>
		</div>
	</>
);
