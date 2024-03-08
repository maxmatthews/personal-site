import React from "react";
import PropTypes from "prop-types";
import maxVector from "../images/headshot.png";
// import resume from '../assets/MatthewsMaxResume.pdf'
import card from "../assets/MatthewsMaxCard.pdf";

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: "none" } : {}}>
		<div className="logo">
			{/*<span className="icon fa-diamond"></span>*/}
			<span>
				<img
					style={{ height: "100%", marginTop: 5, marginLeft: -5 }}
					src={maxVector}
					alt="portrait of max matthews"
				/>
			</span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Max Matthews</h1>
				<p>
					CTO @{" "}
					<a
						href={"https://wearetuzag.com"}
						target="_blank"
						rel="noopener noreferrer"
					>
						tuzag
					</a>{" "}
					<code>&&</code> Lead Instructor @{" "}
					<a
						href={"https://careersincode.org"}
						target="_blank"
						rel="noopener noreferrer"
					>
						Careers In Code
					</a>
				</p>
				<p>Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur.</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						className="headerLink"
						// href="https://mzmtech.com/MatthewsMaxResume.pdf"
						// target="_blank"
						// rel="noopener noreferrer"
						onClick={() => {
							props.onOpenArticle("resume");
						}}
					>
						Resume
					</a>
				</li>
				<li>
					<a className="headerLink" href="https://medium.maxmatthe.ws">
						Blog
					</a>
				</li>
				<li>
					<a
						className="headerLink"
						onClick={() => {
							window.Calendly.initPopupWidget({
								url: "https://calendly.com/maxmatthews",
							});
							return false;
						}}
						style={{ paddingLeft: 19, paddingRight: 19 }}
					>
						Calendar
					</a>
				</li>
				<li>
					<div
						className="headerLink"
						onClick={() => {
							props.onOpenArticle("contact");
						}}
					>
						Contact
					</div>
				</li>
			</ul>
		</nav>
		<div id="headerSocialIcons">
			<ul className="icons">
				<li>
					<a
						href="https://linkedin.com/in/maxzmatthews"
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 fab fa-linkedin-in"
					>
						<span className="label">LinkedIn</span>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/teckno101"
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 fab fa-twitter"
					>
						<span className="label">Twitter</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/maxmatthews/personal-site"
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 fab fa-github"
					>
						<span className="label">GitHub</span>
					</a>
				</li>
				<li>
					<a
						href={card}
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 far fa-address-card"
					>
						<span className="label">Business Card</span>
					</a>
				</li>
				<li>
					<a
						className="icon2 fad fa-dumbbell"
						onClick={() => {
							props.onOpenArticle("strengths");
						}}
						style={{ cursor: "pointer" }}
					>
						<span className="label">Strengths</span>
					</a>
				</li>
			</ul>
		</div>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
};

export default Header;
