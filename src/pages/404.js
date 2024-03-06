import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
	useEffect(() => {
		navigate(`/?redirectFrom=${window.location.pathname}`);
	}, []);
	return null;
};

export default NotFoundPage;
