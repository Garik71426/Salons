import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';
import Constants from './../../../Constants';

class ModalRegister extends Component {
	static contextTypes = {
		AppStore: PropTypes.shape({

		}).isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}
	state = {
		name: '',
		surname: '',
		email: '',
		phone: '',
		password: '',
		repeat_password: '',
		b_day: ''
	}

	toggle(event) {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}
	generalInfoChangeInput = event => {
		console.log(event.target.value)
		return event;
	}
	render() {
		const { signUp } = Constants;
		const { generalInfoChangeInput } = this;
		const { inputs } = Messages.header;
		return (
			<>
				<Button onClick = {this.toggle} className="ml-auto mod_btn" outline color="link" >{this.props.buttonLabel}{Messages.header.signUp}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{Messages.header.signUp}</ModalHeader>
					<ModalBody>
						<Form onSubmit = {this.props.onSubmit}>
							{Object.values(signUp).map(item => {
								return <FormGroup key = {item}>
									<Label for = {item}>{inputs[item].label}</Label>
									<Input 
										type = {inputs[item].type? inputs[item].type: 'text'}
										name = {item}
										id = {item}
										data-date-format = {item === 'b_day' ? 'DD MMMM YYYY' : ''}
										onChange = {generalInfoChangeInput}
										placeholder = {inputs[item].placeholder ? inputs[item].placeholder : ''}
									/>
									<FormFeedback>{inputs.password.validationErrors}</FormFeedback>
								</FormGroup>;
							})}
							<FormGroup>
								<Button type='submit' color="primary">{Messages.header.Submit}</Button>{' '}
								<Button color="secondary" onClick={this.toggle}>{Messages.header.Cancel}</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

export default ModalRegister;