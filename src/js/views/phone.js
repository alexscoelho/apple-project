import React, { useState } from "react";
import { ProductBody } from "../component/productBody";
import goldPhone from "../../img/apple-iphonexs-max-gold-back-2.png";
import frontPhone from "../../img/front-phone-trans.png";
import "../../styles/phone.scss";
import smallPhone1 from "../../img/apple-iphonexs-max-gold.png";
import smallPhone2 from "../../img/apple-iphonexs-max-gold-back-3.png";
import { motion } from "framer-motion";

export const Phone = () => {
	const [pixels, setPixels] = useState(0);
	const hadleScroll = e => {
		setPixels(e.target.scrollLeft);
	};

	const smallImageStyle = { opacity1: 0.3, opacity2: 1 };
	if (pixels === 0) {
		smallImageStyle.opacity1 = 1;
		smallImageStyle.opacity2 = 0.3;
	}

	return (
		<>
			<motion.div
				initial={{ y: 300, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -300, opacity: 0 }}
				transition={{ duration: 0.5 }}>
				<ProductBody
					product="iPhone"
					title="The ultimate iPhone"
					description="This is a modified jumbotron that occupies the entire horizontal space of its parent."
					other="Starts shipping MM-DD-YYY"
					productImage={frontPhone}
					productImage2={goldPhone}
					pixels={pixels}
				/>
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<h1>From $699</h1>
							<p className="text-danger">Buy Now </p>
						</div>

						<div className="small-images" onScroll={e => hadleScroll(e)}>
							<img
								style={{ opacity: smallImageStyle.opacity1 }}
								src={smallPhone1}
								className="img-fluid small-phone1"
								alt={smallPhone1}
							/>
							<img
								style={{ opacity: smallImageStyle.opacity2 }}
								src={smallPhone2}
								className="img-fluid small-phone2"
								alt={smallPhone2}
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
