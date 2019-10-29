import React, { Component } from 'react';
import GraphicalResume from '../images/graphicalResume.png';
import TextualResume from '../images/textualResume.png';

export default class Resume extends Component {
	render() {
		return (
			<article
				id="resume"
				className={`${this.props.article === 'resume' ? 'active' : ''} ${
					this.props.articleTimeout ? 'timeout' : ''
				}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">Resume</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
					<div
						style={{ textAlign: 'center', cursor: 'pointer' }}
						onClick={() => {
							window.open('https://mzmtech.com/MatthewsMaxResume.pdf');
						}}
					>
						<img src={GraphicalResume} style={{ height: 450 }} />
						<button>Graphical (PDF)</button>
					</div>
					<div
						style={{ textAlign: 'center', cursor: 'pointer' }}
						onClick={() => {
							window.open('https://resume.creddle.io/resume/gkf096723g5');
						}}
					>
						<img src={TextualResume} style={{ height: 450 }} />
						<button>Textual (Web)</button>
					</div>
				</div>
				{this.props.close}
			</article>
		);
	}
}
