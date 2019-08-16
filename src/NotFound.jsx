import React, { Component } from 'react';
import Not from './../assets/images/404Not.png'

class NotFound extends Component{
	
	render() {
		const notStyle = {
			paddingLeft: '40%',
    		paddingTop: '5%',
		}
		return(
            <>
			<img src={Not} style={notStyle}/>
            </>
		);
	}
}

export default NotFound;