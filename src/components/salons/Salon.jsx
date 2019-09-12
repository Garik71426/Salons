import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import Workers from './Workers';

import Messages from './../../Messages';

import './../../../assets/stylesheets/salon.css';

class Salon extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({

        }).isRequired
    }
    state = {
        salonInfo: {},
        categoryInfo: [], 
    };

    componentDidMount() {
        const salon_id = this.props.match.params.whichSalon;
        axios.get(`http://localhost:3001/salon/${salon_id}`)
        .then(salon => {
            axios.get(`http://localhost:3001/salon/category/${salon_id}`)
            .then(result => {
                this.setState({ salonInfo: salon.data , categoryInfo: result.data });
            })
            .catch(err => {
                return err;
            });
        })
        .catch(err => {
            return err;
        });
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.whichSalon !== prevProps.match.params.whichSalon) {
            const salon_id = this.props.match.params.whichSalon;
            axios.get(`http://localhost:3001/salon/${salon_id}`)
            .then(salon => {
                axios.get(`http://localhost:3001/salon/category/${salon_id}`)
                .then(result => {
                    this.setState({ salonInfo: salon.data , categoryInfo: result.data });
                })
                .catch(err => {
                    return err;
                });
            })
            .catch(err => {
                return err;
            });
        }
    }
    
    render() {
        const { salonInfo, categoryInfo } =this.state;
		return (
             <Container className = "salon-page">
                <Row><h1 className = 'name'>{salonInfo.name}</h1></Row>
				<Row className = 'about'>
					<Col md="6" >
						<img src={salonInfo.img} alt="salon images"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{salonInfo.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {salonInfo.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {salonInfo.phone}</p>
					</Col>

        		</Row>
                {categoryInfo.map(categoryItem => {
                    return 	<React.Fragment key = {categoryItem.name}>
                        <Row align = "center" className = "mt-5 mb-5 category">
                            <Col>
                                <h2>
                                    {categoryItem.name}
                                </h2>
                            </Col>
                        </Row>
                        <Workers 
                            category_id = {categoryItem.id}
                            salon_id = {salonInfo.id}
                            url = {this.props.match.url}
                        />
                    </React.Fragment>
                })}
			</Container>
		);
	}
}

export default Salon;