import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
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
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{
								name: "description",
								content:
									"Max Matthews: Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur.",
							},
							{
								name: "keywords",
								content:
									"max matthews, full stack developer, javascript, mentor, hacker, entrepreneur",
							},
						]}
					>
						<html lang="en" />
						<link
							href="https://assets.calendly.com/assets/external/widget.css"
							rel="stylesheet"
						/>
						<script
							src="https://assets.calendly.com/assets/external/widget.js"
							type="text/javascript"
						/>
						<meta property="og:type" content="website" />
						<meta
							property="og:image"
							content="https://maxmatthe.ws/og_image.png"
						/>
						<meta property="og:title" content="Max Matthews" />
						<meta property="og:image:width" content="1227" />
						<meta property="og:image:height" content="715" />
						<meta property="og:url" content="https://maxmatthe.ws" />
						<meta
							property="og:description"
							content="Full stack javascript developer, hacker, mentor & entrepreneur."
						/>
						<meta
							property="og:video"
							content="https://maxmatthe.ws/maxlogoanimation.mp4"
						/>
						<meta property="og:image:width" content="3840" />
						<meta property="og:image:height" content="2160" />
					</Helmet>
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
