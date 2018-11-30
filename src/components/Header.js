import React from 'react'
import PropTypes from 'prop-types'
import maxVector from '../images/maxVector.svg'
import resume from '../assets/MatthewsMaxResume.pdf'

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			{/*<span className="icon fa-diamond"></span>*/}
			<span>
				<img
					style={{ height: '5.2rem', marginTop: 5 }}
					src={maxVector}
					alt="vectorized portrait of max matthews"
				/>
			</span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Max Matthews</h1>
				<p>Full Stack Javascript Developer, Hacker, Mentor & Entrepreneur.</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						className="headerLink"
						href={resume}
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
				{/*<li>*/}
				{/*<a*/}
				{/*href="javascript:;"*/}
				{/*onClick={() => {*/}
				{/*props.onOpenArticle('map')*/}
				{/*}}*/}
				{/*>*/}
				{/*Map*/}
				{/*</a>*/}
				{/*</li>*/}
				{/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>*/}
				<li>
					<div
						className="headerLink"
						onClick={() => {
							props.onOpenArticle('contact')
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
						className="icon fa-linkedin"
					>
						<span className="label">LinkedIn</span>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/teckno101"
						target="_blank"
						rel="noopener noreferrer"
						className="icon fa-twitter"
					>
						<span className="label">Twitter</span>
					</a>
				</li>
				<li>
					<a
						href="https://blog.maxmatthe.ws"
						target="_blank"
						rel="noopener noreferrer"
						className="icon fa-rss"
					>
						<span className="label">Blog</span>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/maxmatthews/personal-site"
						target="_blank"
						rel="noopener noreferrer"
						className="icon fa-github"
					>
						<span className="label">GitHub</span>
					</a>
				</li>
			</ul>
		</div>
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
}

export default Header
