import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';

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
	render() {
		return (
			<>
				<Button onClick = {this.toggle} className="ml-auto mod_btn" outline color="link" >{this.props.buttonLabel}{Messages.header.signUp}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{Messages.header.signUp}</ModalHeader>
					<ModalBody>
						<Form onSubmit = {this.props.onSubmit}>
							<FormGroup>
								<Label for="examplePassword">{Messages.header.Name}</Label>
								<Input type="text" name="name" id="examplePassword" />
								<Label for="examplePassword1">{Messages.header.Surname}</Label>
								<Input type="text" name="surname" id="examplePassword1" />
								<Label for="exampleEmail">{Messages.header.Email}</Label>
								<Input type="email" name="email" id="exampleEmail" placeholder={Messages.header.EmailPlaceholder} />
								<Label for="exampleEmail1">{Messages.header.Phone}</Label>
								<Input type="text" name="phone" id="exampleEmail1" placeholder={Messages.header.PhonePlaceholder}/>
								<Label for="examplePassword2">{Messages.header.Password}</Label>
								<Input type="password" name="password" id="examplePassword2" placeholder={Messages.header.PasswordPlaceholder} />
								<Label for="examplePassword3">{Messages.header.RepeatPassword}</Label>
								<Input type="password" name="repeat_password" id="examplePassword3" placeholder={Messages.header.PasswordPlaceholder} />
								<Label for="b_day">'tsnndyan tiv'</Label>
								<Input type="text" name="b_day" id="b_day" placeholder='tsnndyan tiv' />
							</FormGroup>
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