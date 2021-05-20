import React, { useState } from "react";
import "../../styles/signup.scss";

export const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="container ">
			<div className="row justify-content-center">
				<div className="col-md-3 border p-5 sign-up-form shadow-sm">
					<h2 className="signup-title">Sign-in</h2>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Email</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type="text"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="sign-up-button">
							<button type="submit" className="btn btn-primary">
								Sign-In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
