import card from '../assets/MatthewsMaxCard.pdf'
import PropTypes from 'prop-types'
import React from 'react'

function Contact(props) {
	return (
		<article
			id="contact"
			className={`${props.article === 'contact' ? 'active' : ''} ${
				props.articleTimeout ? 'timeout' : ''
			}`}
			style={{ display: 'none' }}
		>
			<h2 className="major">Contact</h2>
			{props.formSubmitted ? (
				<p>Thanks, I'll be in touch soon!</p>
			) : (
				<form
					name="contact"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={props.onSubmit}
				>
					<input type="hidden" name="form-name" value="contact" />
					<div style={{ display: 'none' }}>
						<label>Don’t fill this out if you're human: </label>
						<input name="bot-field" onChange={props.onChange} />
					</div>
					<div className="field half first">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							onChange={props.onChange}
						/>
					</div>
					<div className="field half">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							onChange={props.onChange}
						/>
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							rows="4"
							onChange={props.onChange}
						/>
					</div>
					<ul className="actions">
						<li>
							<input type="submit" value="Send Message" className="special" />
						</li>
					</ul>
				</form>
			)}
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
						href="https://medium.maxmatthe.ws"
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
				<li>
					<a
						href={card}
						target="_blank"
						rel="noopener noreferrer"
						className="icon fa-address-card"
					>
						<span className="label">Business Card</span>
					</a>
				</li>
			</ul>
			{props.close}
		</article>
	)
}

Contact.propTypes = {
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	formSubmitted: PropTypes.bool,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	close: PropTypes.any,
}

export default Contact
