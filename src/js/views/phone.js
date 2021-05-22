import React, { useState } from "react";
import { ProductBody } from "../component/productBody";
import goldPhone from "../../img/apple-iphonexs-max-gold-back-2.png";
import "../../styles/phone.scss";
import smallPhone1 from "../../img/apple-iphonexs-max-gold.png";
import smallPhone2 from "../../img/apple-iphonexs-max-gold-back-3.png";

export const Phone = () => {
	const [state, setState] = useState();
	console.log(state);
	return (
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
					<div className="col-md-3 ">
						<img src={smallPhone1} className="img-fluid small-phone1" alt={smallPhone1} />
						<img src={smallPhone2} className="img-fluid small-phone1" alt={smallPhone2} />
					</div>
				</div>
				<div className="row">
					<div className="col-3" />
					<div className="col-1">
						<input
							onChange={e => setState(e.target.value)}
							type="range"
							className="form-control-range"
							id="formControlRange"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
