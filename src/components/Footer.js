import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: "none" } : {}}>
		<p className="copyright">
			&copy; {new Date().getFullYear()}.{" "}
			<span
				className="aTag"
				onClick={() => {
					props.onOpenArticle("credits");
				}}
			>
				Credits.
			</span>
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool,
};

export default Footer;
