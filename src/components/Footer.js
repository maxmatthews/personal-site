import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">
			&copy; {moment().format('Y')}.{' '}
			<span
				className="aTag"
				onClick={() => {
					props.onOpenArticle('credits')
				}}
			>
				Credits.
			</span>
		</p>
	</footer>
)

Footer.propTypes = {
	timeout: PropTypes.bool,
}

export default Footer
