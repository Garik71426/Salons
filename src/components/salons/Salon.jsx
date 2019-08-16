import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import ChangeSalonInfo from './modals/ChangeSalonInfo';
import AddCategory from './modals/AddCategori';
import SalonAddWorker from './modals/SalonAddWorker';

import NotFound from './../../NotFound'; 
import Messages from './../../Messages';
import CardCategory from './../cards/CardCategory';

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
    componentDidMount() {
        this.context.AppStore.isPath({salonIndex : this.props.match.params.whichSalon},'salon');        
    }
    
    render() {
        const {_Data, deleteWorker, deleteCategory, isUser, isPagePath, isPath} = this.context.AppStore;
        let salonIndex;
        if (isPagePath) {
            salonIndex = this.props.match.params.whichSalon;
        }
        const DataSalon = _Data[salonIndex];
        
		return (
             <Container className = "salon-page">
                {(isPagePath)? <>
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
                        {isUser === 'salon' && <ChangeSalonInfo
                            salonindex={salonIndex}
                            />}


					</Col>

        		</Row>
        		
                {DataSalon.category.map((categoryItem, categotyIndex) => {
                    return 	<React.Fragment key = {categoryItem.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>
                                    {categoryItem.prof}
                                    {isUser === 'salon' && <Button color="danger"  onClick =  {deleteCategory} salon-index = {salonIndex} category-index = {categotyIndex}>X</Button>}
                                </h2>
                            </Col>
                        </Row>
                        <Row>{categoryItem.workers.map((specialistItem, specialistIndex) => {
                                return <React.Fragment key = {specialistIndex}> 
                                    {(isUser === 'salon')?
                                    <CardCategory 
                                        deleteCard = {<Button color="danger" className="delete" onClick = {deleteWorker} salon-index = {salonIndex} category-index = {categotyIndex} specialist-index = {specialistIndex}>X</Button>}
                                        img={specialistItem.img}
                                        title= {`${specialistItem.name} ${specialistItem.surname}`}
                                        name = {`${salonIndex}/${categotyIndex}/${specialistIndex}`}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        url = {this.props.match.url}
                                        />:
                                    <CardCategory 
                                        img={specialistItem.img}
                                        title= {`${specialistItem.name} ${specialistItem.surname}`}
                                        name = {`${salonIndex}/${categotyIndex}/${specialistIndex}`}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        url = {this.props.match.url}
                                        />}
                                </React.Fragment>
                            })}
                            {isUser === 'salon' && <SalonAddWorker salonIndex = {salonIndex} categoryIndex = {categotyIndex}/>}
                        </Row>
                        
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