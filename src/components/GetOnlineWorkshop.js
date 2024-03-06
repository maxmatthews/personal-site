import React, { Component } from "react";

export default class Credits extends Component {
	render() {
		return (
			<article
				id="credits"
				className={`${
					this.props.article === "getOnlineWorkshop" ? "active" : ""
				} ${this.props.articleTimeout ? "timeout" : ""}`}
				style={{ display: "none" }}
			>
				<h2 className="major">Get Online Workshop</h2>
				<ul>
					<li>
						<a
							href="https://maxmatthe.ws/domain"
							target="_blank"
							rel="noopener noreferrer"
						>
							Domains from Namecheap
						</a>
					</li>
					<li>
						<a
							href="https://code.visualstudio.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							VS Code Text Editor
						</a>
					</li>
					<li>
						<a
							href="https://desktop.github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github Desktop
						</a>
					</li>
					<li>
						<a
							href="https://maxmatthe.ws/basicwebpage"
							target="_blank"
							rel="noopener noreferrer"
						>
							HTML & CSS Code
						</a>
					</li>
					<li>
						<a
							href="https://youtu.be/aezevMkWQ_0"
							target="_blank"
							rel="noopener noreferrer"
						>
							Youtube Video
						</a>
					</li>
					<li>
						<a
							href="https://docs.google.com/document/d/1JeAMYNkpbJhK5e91Nx4eDln3KH7DG9z3BTj78cgSYzs/edit"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vocab Sheet
						</a>
					</li>
				</ul>
				{this.props.close}
			</article>
		);
	}
}
