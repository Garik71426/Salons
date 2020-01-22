import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';
import Constants from './../../../Constants';

import './../header/header.css';

class ModalLogin extends Component {
	static contextTypes = {
		AppStore: PropTypes.shape({

		}).isRequired
	};
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			modal: false
		};
	};
	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};
	generalInfoChangeInput = event => {
		return event
	};
	render() {
		const { signIn } = Constants;
		const { generalInfoChangeInput } = this;
		const { inputs } = Messages.header;
		return (
			<>
				<Button onClick={this.toggle} className='ml-auto mod_btn' outline color='link' >{this.props.buttonLabel}{Messages.header.signIn}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{Messages.header.signIn}</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.props.onSubmit}>
							{Object.values(signIn).map(item => {
								return <FormGroup key = {item}>
									<Label for = {item}>{inputs[item].label}</Label>
									<Input 
										type = {inputs[item].type? inputs[item].type: 'text'}
										name = {item}
										id = {item}
										onChange = {generalInfoChangeInput}
										placeholder = {inputs[item].placeholder ? inputs[item].placeholder : ''}
									/>
									<FormFeedback>{inputs.password.validationErrors}</FormFeedback>
								</FormGroup>;
							})}
							<FormGroup>
								<Button type='submit' color="primary">{Messages.header.Submit}</Button>
								<Button color="secondary" onClick={this.toggle}>{Messages.header.Cancel}</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</>
		);
	}
}
export default ModalLogin;
