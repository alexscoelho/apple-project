import React, { useState, useContext } from "react";
import "../../styles/signup.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		const result = await actions.signIn({
			email,
			password
		});

		if (result.length > 0) {
			localStorage.setItem("logedIn", true);
			actions.setLoggedIn();
			history.push("/");
		} else {
			setMessage("enter a valid email or password");
		}
	};

	return (
		<div className="container ">
			<div className="row justify-content-center">
				{message && (
					<div className="alert alert-danger" role="alert">
						{message}
					</div>
				)}
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
							<button type="submit" className="btn btn-dark">
								Sign-In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
