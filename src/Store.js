import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
	isLogin: false,
	info: {email: '', uid: '', website: '', isAdmin: false}
});

export default Store;
