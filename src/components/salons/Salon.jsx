import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import Workers from './Workers';

import Messages from './../../Messages';

import './../../../assets/stylesheets/salon.css';

@observer
class Salon extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            getSalon: PropTypes.func,
            getSalonWorkers: PropTypes.func,
            getSalonCategories: PropTypes.func,
            salon: PropTypes.object,
            salonWorkers: PropTypes.array,
            salonCategories: PropTypes.array,
        }).isRequired
    } 
    componentDidMount() {
        const salon_id = this.props.match.params.whichSalon;
        this.context.AppStore.getSalonWorkers(salon_id);
        this.context.AppStore.getSalon(salon_id);
        this.context.AppStore.getSalonCategories(salon_id);
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.whichSalon !== prevProps.match.params.whichSalon) {
            const salon_id = this.props.match.params.whichSalon;
            this.context.AppStore.getSalonWorkers(salon_id);
            this.context.AppStore.getSalon(salon_id);
            this.context.AppStore.getSalonCategories(salon_id);
        }
    }
    
    render() {
        const { salon, salonWorkers, salonCategories } = this.context.AppStore;
		return (
             <Container className = "salon-page section">
                <Row><h1 className = 'name'>{salon.name}</h1></Row>
				<Row className = 'about'>
					<Col md="6" >
						<img src={salon.img} alt="salon images"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{salon.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {salon.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {salon.phone}</p>
					</Col>

        		</Row>
                {salonCategories.length !== 0 && salonCategories.map(category => {
                    return 	<React.Fragment key = {category.id}>
                        <Row align = "center" className = "mt-5 mb-5 category">
                            <Col>
                                <h2>
                                    {category.name}
                                </h2>
                            </Col>
                        </Row>
                        <Workers 
                            workers = {salonWorkers.length !== 0 && salonWorkers.filter(worker => worker.category_id === category.id)}z
                            url = {this.props.match.url}
                        />
                    </React.Fragment>
                })}
			</Container>
		);
	}
}

export default Salon;