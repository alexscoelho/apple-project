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

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/">
							<Intro />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/mackbook">
							<Navbar />
							<Mackbook />
						</Route>
						<Route exact path="/phone">
							<Navbar />
							<Phone />
						</Route>
						<Route exact path="/watch">
							<Navbar />
							<Watch />
						</Route>
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
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
