import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: "none" } : {}}>
		<p className="copyright">
			&copy; {new Date().getFullYear()}.{" "}
			<button
				className="aTag"
				onClick={() => {
					props.onOpenArticle("credits");
				}}
			>
				Credits.
			</button>
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool,
};

export default Footer;
