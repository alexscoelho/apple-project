import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const PrivateRoute = ({ children, ...rest }) => {
	const { store } = useContext(Context);
	const history = useHistory();

	if (!store.isLogedIn) {
		history.push("/signin");
		return "Redirecting";
	}
	return <Route {...rest}>{children}</Route>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node
};
PrivateRoute.defaultProps = {
	children: null
};
