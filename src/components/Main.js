import React, { Component } from "react";
import Contact from "./Contact";
import Credits from "./Credits";
import Strengths from "./Strengths";
// import Resume from "./Resume";
import GetOnlineWorkshop from "./GetOnlineWorkshop";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { formSubmitted: false };
	}

	render() {
		let close = (
			<button
				className="close"
				onClick={() => {
					this.props.onCloseArticle();

					setTimeout(() => {
						this.setState({ formSubmitted: false });
					}, 500);
				}}
				aria-label="Close"
			/>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: "flex" } : { display: "none" }}
			>
				<Credits
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					close={close}
				/>

				<Contact
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					close={close}
				/>

				{/*<Resume*/}
				{/*	article={this.props.article}*/}
				{/*	articleTimeout={this.props.articleTimeout}*/}
				{/*	close={close}*/}
				{/*/>*/}

				<Strengths
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					close={close}
				/>

				<GetOnlineWorkshop
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					close={close}
				/>
			</div>
		);
	}
}

export default Main;
