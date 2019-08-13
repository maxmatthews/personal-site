import React, { Component } from 'react';
import Contact from './Contact';
import Credits from './Credits';
import Strengths from './Strengths';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = { formSubmitted: false };
	}

	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();

					setTimeout(() => {
						this.setState({ formSubmitted: false });
					}, 500);
				}}
			/>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
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

				<Strengths
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					close={close}
				/>
			</div>
		);
	}
}

export default Main;
