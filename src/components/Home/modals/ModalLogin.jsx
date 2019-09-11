import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/header.css';

class ModalLogin extends Component {
	static contextTypes = {
		AppStore: PropTypes.shape({

		}).isRequired
	}
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			modal: false
		};
	}
	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	state = {
		email: '',
		password: ''
	}


	render() {
		return (
			<div>
				<Button onClick={this.toggle} className='ml-auto mod_btn' outline color='link' >{this.props.buttonLabel}{Messages.header.signIn}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{Messages.header.signIn}</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.props.onSubmit}>
							<FormGroup>
								<Label for='email'>{Messages.header.Email}</Label>
								<Input type='email' name='email' id='email' placeholder={Messages.header.EmailPlaceholder} />
								<Label for='password'>{Messages.header.Password}</Label>
								<Input type='password' name='password' id='password' placeholder={Messages.header.PasswordPlaceholder} />
							</FormGroup>
							<FormGroup>
								<Button type='submit' color="primary">{Messages.header.Submit}</Button>{' '}
								<Button color="secondary" onClick={this.toggle}>{Messages.header.Cancel}</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
export default ModalLogin;
