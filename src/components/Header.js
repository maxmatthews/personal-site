import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: "none" } : {}}>
		<div className="logo">
			{/*<span className="icon fa-diamond"></span>*/}
			<span>
				<StaticImage
					src={"../images/headshot.png"}
					alt={"portrait of max matthews"}
					placeholder="blurred"
					width={120}
					height={115}
					style={{ marginTop: 5, marginLeft: -5 }}
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
				<p>
					Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur.
					Syracuse, NY.
				</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						className="headerLink"
						href="/MatthewsMaxResume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						// onClick={(event) => {
						// 	event.preventDefault();
						// 	props.onOpenArticle("resume");
						// }}
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
						onClick={(evt) => {
							evt.preventDefault();
							window.Calendly.initPopupWidget({
								url: "https://calendly.com/maxmatthews",
							});
							return false;
						}}
						href={"https://calendly.com/maxmatthews"}
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
						aria-label={"Max's Linked In Profile"}
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
						aria-label={"Max's Twitter Profile"}
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
						aria-label={"Max's GitHub Profile"}
					>
						<span className="label">GitHub</span>
					</a>
				</li>
				<li>
					<a
						href={"/MatthewsMaxCard.pdf"}
						target="_blank"
						rel="noopener noreferrer"
						className="icon2 far fa-address-card"
						aria-label={"Max's Business Card"}
					>
						<span className="label">Business Card</span>
					</a>
				</li>
				<li>
					<a
						href={"/strengths"}
						className="icon2 fad fa-dumbbell"
						onClick={(event) => {
							event.preventDefault();
							props.onOpenArticle("strengths");
						}}
						style={{ cursor: "pointer" }}
						aria-label={"Max's Strength Quest Results"}
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
