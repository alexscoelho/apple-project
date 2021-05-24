const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			validUsers: [{ email: "alexson@hotmail.com", password: "123456" }],
			isLogedIn: localStorage.getItem("logedIn") || false
		},
		actions: {
			signIn: ({ email, password }) => {
				const store = getStore();
				const validUser = store.validUsers.filter(user => user.email === email && user.password === password);
				return validUser;
			},
			setLoggedIn: () => {
				const store = getStore();
				store.isLogedIn = true;
			}
		}
	};
};

export default getState;
