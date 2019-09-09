import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Error.css';

class Error extends Component {
	static propTypes = {
        status : PropTypes.number,
        message : PropTypes.string
	}
	
	static defaultProps = {
        status : 404,
        message : 'Page Not Found'
	}
	
	render () {
		const { status, message } = this.props;
		return (
			<div className = 'errorPage'>
				<h2>{ status }</h2>
				<p>{ message }</p>
			</div>
		);
	}
}

export default Error;
