import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Intro } from "./views/intro";
import { Mackbook } from "./views/mackbook";
import { Phone } from "./views/phone";
import { Watch } from "./views/watch";
import { Single } from "./views/single";
import { SignIn } from "./views/signIn";
import { SignUp } from "./views/signUp";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PrivateRoute } from "./component/PrivateRoute";
import { AnimatePresence } from "framer-motion";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	let path = window.location;

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<AnimatePresence exitBeforeEnter>
						<Switch location={path} key={path.pathname}>
							<PrivateRoute exact path="/">
								<Intro />
							</PrivateRoute>
							<PrivateRoute exact path="/home">
								<Navbar />
								<Home />
							</PrivateRoute>
							<PrivateRoute exact path="/mackbook">
								<Navbar />
								<Mackbook />
							</PrivateRoute>
							<PrivateRoute exact path="/phone">
								<Navbar />
								<Phone />
							</PrivateRoute>
							<PrivateRoute exact path="/watch">
								<Navbar />
								<Watch />
							</PrivateRoute>
							<Route exact path="/signin">
								<SignIn />
							</Route>
							<Route exact path="/signup">
								<SignUp />
							</Route>
							<Route exact path="/demo">
								<Demo />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</AnimatePresence>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
