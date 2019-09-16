import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Messages from './../../Messages'

class AccountSetting extends Component {
	static contextTypes = {
		AppStore: PropTypes.shape({

		}).isRequired
	}
	state = {
		account: {}
	};

	componentDidMount(){
		axios.get(`http://localhost:3001/users/account/${this.props.match.params.uid}`)
        .then(res => {
            this.setState({ account: res.data })
        })
        .catch(err => {
            return err;
        });
	};

	changeAccountInfo = event => {
		const info = this.state.account;
		info[event.target.name] = event.target.value;
		this.setState({ account: info });
	};

	sendData = () => {
		axios.put(`http://localhost:3001/users/settings/${this.props.match.params.uid}`, this.state.account )
        .then(res => {
			//tar my/uid
            alert('ok')
        })
        .catch(err => {
            return err;
        });
	}

	render() {
		const { account } = this.state;
		const { changeAccountInfo, sendData } = this;
		return (
			<Form onSubmit = {sendData}>
				{account.name && 
					<FormGroup>
						<Label for="img"></Label>
						<Input type="file" onChange = {changeAccountInfo} name="img" accept="image/png, image/jpeg" className = 'input_file' id="img" />
						<Label for="name">{Messages.Account.name}</Label>
						<Input type = "text" onChange = {changeAccountInfo} name = "name" id = "name" value = {account.name}/>
						<Label for="surname">{Messages.Account.surname}</Label>
						<Input type="text" onChange = {changeAccountInfo} name="surname" id="surname" value = {account.surname}/>
						<Label for="phone">{Messages.Account.phone}</Label>
						<Input type="text" onChange = {changeAccountInfo} name="phone" id="phone" value = {account.phone}/>
						<Label for="b_day">'tsnndyan tiv'</Label>
						<Input type="date" data-date-format="DD MMMM YYYY" onChange = {changeAccountInfo} name="b_day" id="b_day" value = {account.b_day.split('T')[0]}/>
						<Button type='submit' color="primary">{Messages.Account.Submit}</Button>{' '}
						<Link to = {`/my/${this.props.match.params.uid}`} >
							Cansel
						</Link>
					</FormGroup>}
			</Form>
		);
	}
}

export default AccountSetting;
