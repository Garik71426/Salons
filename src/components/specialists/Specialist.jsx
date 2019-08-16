import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import DateHourse from './form/DateHourse'
import ChangeSpecialistInfo from './modals/ChangeSpecialistInfo'

import Messages from './../../Messages';

import './../../../assets/stylesheets/specialist.css';

import NotFound from './../../NotFound'; 

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            isUser : PropTypes.string,
            deleteWorksImage : PropTypes.func,
        }).isRequired
    };
    componentDidMount() {
        this.context.AppStore.isPath({
            whichSalon : this.props.match.params.whichSalon,
            whichCategory : this.props.match.params.whichCategory,
            salonIndex : this.props.match.params.salonIndex,
            categoryIndex : this.props.match.params.categoryIndex,
            specialistIndex : this.props.match.params.specialistIndex,
            ee : this.props.match
        },'specialist');
    }

    render() {
        const whichSalon = this.props.match.params.whichSalon;
        const salonIndex = this.props.match.params.salonIndex;
        const categoryIndex = this.props.match.params.categoryIndex;
        const specialistIndex = this.props.match.params.specialistIndex;
        const {_Data , deleteWorksImage, isUser, id, isPagePath, isPath, changeSpeciaistWorkImages} = this.context.AppStore;
        
        let salon, category, specialist;
        if (isPagePath) {
            salon = _Data[salonIndex];
            category =  _Data[salonIndex].category[categoryIndex];
            specialist =  _Data[salonIndex].category[categoryIndex].workers[specialistIndex];
        }
        return (
            <div className = "sections mt-5">
                {(isPagePath)?
                 <Container className="mb-5">
                     <Row>
                        <Col sm="8" >
                            <h3 className = "textBlue" > {specialist.name} {specialist.surname}</h3>
                            <div className="user" >
                                <img src={specialist.img} height = "200px" alt="user image" width="200px" className ="d-inline" />
                                <div className="info">
                                    {isUser === 'salon' && <ChangeSpecialistInfo salonIndex={salonIndex} categoryIndex={categoryIndex} specialistIndex = {specialistIndex}/>}
                                    <p>{specialist.textAbout}</p>
                                </div>
                            </div>
                            <div>
                                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                                <p> {Messages.specialist.phoneNumber} {_Data[salonIndex].phone} </p>
                                <p> {Messages.specialist.age} {specialist.age} </p>
                                <p> {Messages.specialist.salonName}{specialist.salonTitle}</p>
                                <p>{Messages.specialist.salonAddress} {specialist.salonAddress}</p>
                                <p> {Messages.specialist.prof} {_Data[salonIndex].category[categoryIndex].prof} </p>
                                <p>{Messages.specialist.socialMedia} {specialist.socialNetwork.map((item, index) => {
                                        return <a target="blank" href={item.url} key={index}>{item.socialMediaName} </a>
                                    })}</p>



                            </div>
                         </Col>
                         {isUser === 'user' && <DateHourse />}
                     </Row>
                     <h1 className = "textBlue" >{Messages.specialist.myWorkes}</h1>
                     <Row className = "mt-5">
                     {specialist.workImgs.map((item, index) => {
                             return <React.Fragment key = {index}>
                             {(isUser === 'salon') ?
                                    <Col align = "center">
                                    <div className = "change_spec_img">
                                        <Button color="danger" 
                                            className="delete" salon-name={specialist.salonTitle} onClick = {deleteWorksImage} data-index = {index} 
                                            specialist-index = {specialistIndex} salon-index={salonIndex} category-index={categoryIndex}>X</Button>
                                        <Input className="name_add"  type="file" name="file" id="exampleFile"
                                            onChange={changeSpeciaistWorkImages} specialist-index = {specialistIndex} salon-index={salonIndex} 
                                            category-index={categoryIndex} index={index}
                                        />
                                        <img src={item} alt="works image" className ="d-inline "  width="200px" height="200px" />
                                    </div>
                                    </Col>:
                                    <Col align = "center">
                                        <img src={item} alt="works image" className ="d-inline " width="200px" height="200px" />
                                    </Col>
                             }
                             </React.Fragment>
                         })}
                     </Row>
                </Container>: <NotFound/>
            }
            </div>
        );
    }
}

export default SpecialistUser;
