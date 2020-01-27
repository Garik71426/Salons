import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import CardCategory from './../cards/CardCategory';
import ChangeSalonInfo from './modals/ChangeSalonInfo';
import AddCategory from './modals/AddCategori'
import SalonAddWorker from './modals/SalonAddWorker';

import notification from './../../../assets/images/salon/notification.png';

import './../../../assets/stylesheets/salon.css';

@observer
class SalonUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            deleteCategory : PropTypes.func,
            deleteWorker : PropTypes.func,
        }).isRequired
    }
    
    
    render() {
        const {_Data, deleteWorker, deleteCategory} = this.context.AppStore;
        const salonIndex = this.props.match.params.whichSalon;
        const DataSalon = _Data[salonIndex];
        
		return (
            <Container className = "salon-page">
                <Row>
                    <Col >
                        <h1 className='varsAnun'>{DataSalon.name}</h1>
                    </Col>
                    <img src={notification} alt=""  align="right" width = "50px" height = "50px"/>

				</Row>
				<Row className = "salon-page">
					<Col md="6" >
						<img src={DataSalon.img} alt="" className="logoSal" width = "100%" height = "370vh"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{DataSalon.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {DataSalon.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {DataSalon.phone}</p>
                        <ChangeSalonInfo
                            salonId={DataSalon.id}
                            />
					</Col>

        		</Row>
        		
                {DataSalon.category.map(item => {
                    return 	<React.Fragment key = {item.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>
                                    {item.prof}
                                    <Button color="danger"  onClick =  {deleteCategory} category-id = {item.id}>X</Button>
                                </h2>
                            </Col>
                        </Row>
                        <Row>{item.workers.map((item1, index1) => {
                                return <React.Fragment key = {item1.surname}>
                                    <CardCategory 
                                        deleteCard = {<Button color="danger" className="delete" onClick = {deleteWorker} specialist-id = {item1.id}>X</Button>}
                                        img={item1.img}
                                        title= {`${item1.name} ${item1.surname}`}
                                        name = {item1.id}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        url = {this.props.match.url}
                                        /> 
                                </React.Fragment>
                            })}
                            <SalonAddWorker categoryId={item.id}/>
                        </Row>
                        
                    </React.Fragment>
                })}
                <Row align = "center" className = "mt-5 mb-5">  
                  <AddCategory salonIndex = {salonIndex}/>
                </Row>
			</Container>
		);
	}
}

export default SalonUser;