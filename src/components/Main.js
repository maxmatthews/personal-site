import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle()
				}}
			/>
		)

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
			>
				{/*<article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>*/}
				{/*<h2 className="major">Work</h2>*/}
				{/*<span className="image main"><img src={pic02} alt="" /></span>*/}
				{/*<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>*/}
				{/*<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>*/}
				{/*{close}*/}
				{/*</article>*/}

				<article
					id="map"
					className={`${this.props.article === 'map' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Map</h2>
					{close}
				</article>

				<article
					id="credits"
					className={`${this.props.article === 'credits' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Credits</h2>
					<p>
						Theme by{' '}
						<a
							href="https://github.com/codebushi/gatsby-starter-forty"
							target="_blank"
							rel="noopener noreferrer"
						>
							Codebushi
						</a>
					</p>
					<p>
						Backgrounds by{' '}
						<a
							href="https://www.oxygenna.com/freebies/50-material-design-backgrounds"
							target="_blank"
							rel="noopener noreferrer"
						>
							Oxygenna
						</a>
					</p>
					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === 'contact' ? 'active' : ''} ${
						this.props.articleTimeout ? 'timeout' : ''
					}`}
					style={{ display: 'none' }}
				>
					<h2 className="major">Contact</h2>
					<form method="post" action="https://mailthis.to/maxmatthews">
						<input type="hidden" name="_honeypot" value="" />
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="email" />
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows="4" />
						</div>
						<ul className="actions">
							<li>
								<input type="submit" value="Send Message" className="special" />
							</li>
							<li>
								<input type="reset" value="Reset" />
							</li>
						</ul>
					</form>
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
					{close}
				</article>
			</div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
}

export default Main
