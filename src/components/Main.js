import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = { formSubmitted: false }
	}

	handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...this.state,
			}),
		})
			.then(() => {
				this.setState({ formSubmitted: true })
			})
			.catch(error => alert(error))
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle()

					setTimeout(() => {
						this.setState({ formSubmitted: false })
					}, 500)
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

				<Contact
					article={this.props.article}
					articleTimeout={this.props.articleTimeout}
					formSubmitted={this.state.formSubmitted}
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					close={close}
				/>
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
