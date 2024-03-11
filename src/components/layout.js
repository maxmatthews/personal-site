import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "rc-collapse/assets/index.css";
import "@fortawesome/fontawesome-pro/css/all.min.css";
import "../assets/scss/main.scss";

const Layout = ({ children, location }) => {
	let content;

	if (location && location.pathname === "/") {
		content = <div>{children}</div>;
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		);
	}

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => (
				<div>
					<html lang="en" />
					{content}
				</div>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
