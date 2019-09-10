import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Messages from './../../Messages';

import './../../../assets/stylesheets/footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<Container>
					<Row>
						<Col md={4} sm={8}>
							<ul>
								<li>{Messages.footer.footerEmail}</li>
								<li>{Messages.footer.footerPhone1}</li>
								<li>{Messages.footer.footerPhone2}</li>
								<li>{Messages.footer.footerPhone3}</li>
								<li>{Messages.footer.footerDate}</li>
							</ul>
						</Col>
						<Col md={4} sm={8}>
							<ul>
								<li><a href="http://trims.com/" target = "blank">{Messages.footer.footerLi1}</a></li>
								<li><a href="http://www.handsome.com/" target = "blank">{Messages.footer.footerLi2}</a></li>
								<li><a href="https://barberha.com/"  target = "blank">{Messages.footer.footerLi3}</a></li>
							</ul>
						</Col>
						<Col md={4}  sm={8}  xs={8} >
							<ul>
								<li>
									<a href="https://www.facebook.com/" target = "blank"><img src="/static/assets/images/footer/facebook.png" alt="Facebook.com"  className="icon_width"/></a>
									<a href="https://www.instagram.com/" target = "blank"><img src="/static/assets/images/footer/instagram.png" alt="instagram"  className="icon_width"/></a>
									<a href="https://twitter.com/" target = "blank"><img src="/static/assets/images/footer/twitter.png" alt="twitter"  className="icon_width"/></a>
									<a href="https://www.youtube.com/" target = "blank"><img src="/static/assets/images/footer/youtube.png" alt="youtube"  className="icon_width"/></a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
export default Footer;
