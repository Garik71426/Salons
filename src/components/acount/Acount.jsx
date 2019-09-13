import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Messages from './../../Messages';

//import AcountSetting from './AcountSet';

class Acount extends Component {
    static contextTypes = {
        UIStore: PropTypes.shape({
            calculate_age: PropTypes.func
        }).isRequired
    }

    state = {
        account: {}
    }

    componentDidMount() {
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
        const age = this.context.UIStore.calculate_age(new Date(account.b_day));
        return (
            <Container>
                <Row>
                    <Col sm="8" >
                        <h3> {account.name} {account.surname}</h3>
                        <img src={account.img} height="200px" alt="user image" width="200px" style = { { borderRadius: '50%' } }/>
                        <div>
                            <p>{Messages.Account.name} {account.name}</p>
                            <p>{Messages.Account.surname} {account.surname}</p>
                            <p>{Messages.Account.phone} {account.phone}</p>
                            <p>{Messages.Account.age} {age}</p>
                            <Link to = {`/my/${this.props.match.params.uid}/setting`}>
                                settings
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
		);
    }
}

export default Acount;
