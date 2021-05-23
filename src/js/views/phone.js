import React, { useState, useEffect } from "react";
import { ProductBody } from "../component/productBody";
import goldPhone from "../../img/apple-iphonexs-max-gold-back-2.png";
import frontPhone from "../../img/Iphone 1@2x.png";
import "../../styles/phone.scss";
import smallPhone1 from "../../img/apple-iphonexs-max-gold.png";
import smallPhone2 from "../../img/apple-iphonexs-max-gold-back-3.png";

export const Phone = () => {
	const [phoneImage, setPhoneImage] = useState(frontPhone);
	const [pixels, setPixels] = useState(0);

	console.log(pixels);

	const handleScroll = e => {
		setPixels(e.target.scrollLeft);
	};

	return (
		<>
			<ProductBody
				product="iPhone"
				title="The ultimate iPhone"
				description="This is a modified jumbotron that occupies the entire horizontal space of its parent."
				other="Starts shipping MM-DD-YYY"
				productImage={phoneImage}
			/>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h1>From $699</h1>
						<p className="text-danger">Buy Now </p>
					</div>
					{/* <div className="col-md-3 small-images">
						<img src={smallPhone1} className="img-fluid small-phone1" alt={smallPhone1} />
						<img src={smallPhone2} className="img-fluid small-phone1" alt={smallPhone2} />
					</div> */}
					<div className="small-images" onScroll={e => handleScroll(e)}>
						<img src={smallPhone1} className="img-fluid small-phone1" alt={smallPhone1} />
						<img src={smallPhone2} className="img-fluid small-phone1" alt={smallPhone2} />
					</div>
				</div>
				{/* <div className="row">
					<div className="col-3" /> */}
				{/* <button
						
							onClick={e => {
								console.log("evento", e.screenX, e.screenY, e.currentTarget, e.clientX, e.clientY);
								setPhoneImage(phoneImage === frontPhone ? goldPhone : frontPhone);
							}}
							className="btn btn-primary">
							Click
						</button> */}
				{/* </div> */}
			</div>
		</>
	);
};
