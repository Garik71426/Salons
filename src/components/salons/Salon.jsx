import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import ChangeSalonInfo from './modals/ChangeSalonInfo';
import AddCategory from './modals/AddCategori';
import Workers from './Workers';

import NotFound from './../../NotFound'; 
import Messages from './../../Messages';

import notification from './../../../assets/images/salon/notification.png';

import './../../../assets/stylesheets/salon.css';

@observer
class Salon extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            deleteCategory : PropTypes.func,
            deleteWorker : PropTypes.func,
        }).isRequired
    }
    state = {
        salonInfo: {},
        categoryInfo: [], 
    };

    componentDidMount() {
        this.context.AppStore.isPath({salonIndex : this.props.match.params.whichSalon},'salon'); 
        let salonIndex;
        if (this.context.AppStore.isPagePath) {
            salonIndex = this.props.match.params.whichSalon;
        }
        fetch(`http://localhost:3001/salon/${salonIndex}`)
        .then(res => res.json())
        .then(
            (salon) => {
                fetch(`http://localhost:3001/salon/category/${salonIndex}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({ salonInfo: salon , categoryInfo: result });
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            },
            (error) => {
                console.log(error);
            }
        )
    }

    componentDidUpdate(){
        this.context.AppStore.isPath({salonIndex : this.props.match.params.whichSalon},'salon'); 
        let salonIndex;
        if (this.context.AppStore.isPagePath) {
            salonIndex = this.props.match.params.whichSalon;
        }
        fetch(`http://localhost:3001/salon/${salonIndex}`)
        .then(res => res.json())
        .then(
            (salon) => {
                fetch(`http://localhost:3001/salon/category/${salonIndex}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({ salonInfo: salon , categoryInfo: result });
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            },
            (error) => {
                console.log(error);
            }
        )
    }
    
    render() {
        let salonIndex;
        if (this.context.AppStore.isPagePath) {
            salonIndex = this.props.match.params.whichSalon;
        }
        const {deleteWorker, deleteCategory, isUser, isPagePath} = this.context.AppStore;
        
        const { salonInfo, categoryInfo } =this.state;
		return (
             <Container className = "salon-page">
                {(isPagePath)? <>
                <Row>
                    <Col >
                        <h1 className='varsAnun'>{salonInfo.name}</h1>
                    </Col>
                    <img src={notification} alt=""  align="right" width = "50px" height = "50px"/>

				</Row>
				<Row className = "salon-page">
					<Col md="6" >
						<img src={salonInfo.img} alt="" className="logoSal" width = "100%" height = "370vh"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{salonInfo.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {salonInfo.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {salonInfo.phone}</p>
                        {isUser === 'salon' && <ChangeSalonInfo
                            salonindex={salonIndex}
                            />}


					</Col>

        		</Row>
        		
                {categoryInfo.map((categoryItem, categotyIndex) => {
                    return 	<React.Fragment key = {categoryItem.name}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>
                                    {categoryItem.name}
                                    {isUser === 'salon' && <Button color="danger"  onClick =  {deleteCategory} salon-index = {salonIndex} category-index = {categotyIndex}>X</Button>}
                                </h2>
                            </Col>
                        </Row>
                        <Workers 
                            category_id = {categoryItem.id}
                            salon_id = {salonInfo.id}
                        />
                    </React.Fragment>
                })}
                {isUser === 'salon' && <Row align = "center" className = "mt-5 mb-5">  
                    <AddCategory salonIndex = {salonIndex}/>
                </Row>}
                </>: <NotFound/>}
			</Container>
		);
	}
}

export default Salon;