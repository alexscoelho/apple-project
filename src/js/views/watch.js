import React from "react";
import { ProductBody } from "../component/productBody";
import blackWatch from "../../img/Black Watch-1.png";

export const Watch = () => (
	<>
		<ProductBody
			product="Apple Watch"
			title="Change starts within."
			description="This is a modified jumbotron that occupies the entire horizontal space of its parent."
			other="Starts shipping MM-DD-YYY"
			productImage={blackWatch}
		/>
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
