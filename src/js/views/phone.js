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
			</div>
		</div>
	</>
);
