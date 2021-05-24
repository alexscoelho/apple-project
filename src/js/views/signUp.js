import React from "react";
import "../../styles/signup.scss";

export const SignUp = () => {
	return (
		<div className="container ">
			<div className="row justify-content-center">
				<div className="col-md-3 border p-5 sign-up-form shadow-sm bg-white">
					<h2 className="signup-title">Sign-up</h2>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Full Name</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Email</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<div className="sign-up-button">
							<button type="submit" className="btn btn-dark">
								Sign-Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
