import React, { Component } from 'react'

export default class Credits extends Component {
	render() {
		return (
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
				{this.props.close}
			</article>
		)
	}
}
