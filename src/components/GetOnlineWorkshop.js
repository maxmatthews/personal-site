import React, { Component } from 'react';

export default class Credits extends Component {
	render() {
		return (
			<article
				id="credits"
				className={`${
					this.props.article === 'getOnlineWorkshop' ? 'active' : ''
				} ${this.props.articleTimeout ? 'timeout' : ''}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">Get Online Workshop</h2>
				<p>Click on any of the links below:</p>
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
		);
	}
}
