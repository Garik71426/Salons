import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Messages from './../../Messages'

class AcountSetting extends Component {
	static contextTypes = {
		AppStore: PropTypes.shape({

		}).isRequired
	}
	state = {
		account: {}
	};

	componentDidMount(){
		axios.get(`http://localhost:3001/users/${this.props.match.params.uid}`)
        .then(res => {
            this.setState({ account: res.data })
        })
        .catch(err => {
            return err;
        });
	}

	render() {
		const { account } = this.state;
		return (
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label for="img"></Label>
					<Input type="file" accept="image/png, image/jpeg" className = 'input_file' id="img" />
					<Label for="name">{Messages.Account.name}</Label>
					<Input type="text" name="name" id="name" value = {account.name} />
					<Label for="surname">{Messages.Account.surname}</Label>
					<Input type="text" name="surname" id="surname" value = {account.surname}/>
					<Label for="phone">{Messages.Account.phone}</Label>
					<Input type="text" name="phone" id="phone" value = {account.phone}/>
					<Label for="b_day">'tsnndyan tiv'</Label>
					<Input type="date" name="b_day" id="b_day" value = {account.b_day}/>
				</FormGroup>
				<FormGroup>
					<Button type='submit' color="primary">{Messages.Account.Submit}</Button>{' '}
					<Link to = {`/my/${this.props.match.params.uid}`} >
						Cansel
					</Link>
				</FormGroup>
			</Form>
		);
	}
}

export default AcountSetting;
