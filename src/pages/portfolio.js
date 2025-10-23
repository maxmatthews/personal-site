import React from "react";
import { navigate } from "gatsby";
import { useEffect } from "react";

export default function PortfolioRedirect() {
	useEffect(() => {
		navigate("/?redirectFrom=portfolio", { replace: true });
	}, []);
	return <div>Please wait for redirect...</div>;
}
