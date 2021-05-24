import React, { useState } from "react";
import { ProductBody } from "../component/productBody";
import blackWatch from "../../img/balck-watch-trans.png";
import whiteWatch from "../../img/white-watch-trans.png";
import { motion } from "framer-motion";

export const Watch = () => {
	const [watchColor, setWatchColor] = useState(blackWatch);
	const watchBlack = () => {
		setWatchColor(blackWatch);
	};
	const watchWhite = () => {
		setWatchColor(whiteWatch);
	};
	return (
		<>
			<motion.div
				initial={{ x: -300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 300, opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<ProductBody
					product="Apple Watch"
					title="Change starts within."
					description="This is a modified jumbotron that occupies the entire horizontal space of its parent."
					other="Starts shipping MM-DD-YYY"
					productImage={watchColor}
				/>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<h1>From $699</h1>
							<p className="text-danger">Buy Now </p>
						</div>
						<div className="col-6 d-flex justify-content-center">
							<button
								onClick={() => {
									watchWhite();
								}}
								className="btn">
								<i className="far fa-circle mr-5" />
							</button>
							<button
								onClick={() => {
									watchBlack();
								}}
								className="btn">
								<i className="fas fa-circle" />
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
