import React, { Component } from "react";

export default class Contact extends Component {
	state = { formSubmitted: false };

	encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
			)
			.join("&");
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: this.encode({
				"form-name": form.getAttribute("name"),
				...this.state,
			}),
		})
			.then(() => {
				this.setState({ formSubmitted: true });
			})
			.catch((error) => alert(error));
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<article
				id="contact"
				className={`${this.props.article === "contact" ? "active" : ""} ${
					this.props.articleTimeout ? "timeout" : ""
				}`}
				style={{ display: "none" }}
			>
				<h2 className="major">Contact</h2>
				{this.state.formSubmitted ? (
					<p>Thanks, I'll be in touch soon!</p>
				) : (
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						onSubmit={this.handleSubmit}
					>
						<input type="hidden" name="form-name" value="contact" />
						<div style={{ display: "none" }}>
							<label htmlFor={"bot"}>
								Don’t fill this out if you're human:{" "}
							</label>
							<input
								name="bot-field"
								onChange={this.handleChange}
								id={"bot-field"}
							/>
						</div>
						<div className="field half first">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								onChange={this.handleChange}
							/>
						</div>
						<div className="field half">
							<label htmlFor="email">Email</label>
							<input
								type="text"
								name="email"
								id="email"
								onChange={this.handleChange}
							/>
						</div>
						<div className="field">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								rows="4"
								onChange={this.handleChange}
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
							className="icon2 fab fa-linkedin-in"
						>
							<span className="label">LinkedIn</span>
						</a>
					</li>
					{/*<li>*/}
					{/*	<a*/}
					{/*		href="https://twitter.com/teckno101"*/}
					{/*		target="_blank"*/}
					{/*		rel="noopener noreferrer"*/}
					{/*		className="icon2 fab fa-twitter"*/}
					{/*	>*/}
					{/*		<span className="label">Twitter</span>*/}
					{/*	</a>*/}
					{/*</li>*/}
					<li>
						<a
							href="https://medium.maxmatthe.ws"
							target="_blank"
							rel="noopener noreferrer"
							className="icon2 fas fa-rss"
						>
							<span className="label">Blog</span>
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
							href={"/MatthewsMaxCard.pdf"}
							target="_blank"
							rel="noopener noreferrer"
							className="icon2 far fa-address-card"
						>
							<span className="label">Business Card</span>
						</a>
					</li>
				</ul>
				{this.props.close}
			</article>
		);
	}
}
