import React,{Component} from 'react';
import {Container, Row, Col,Button, FormGroup, Label, Input} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';




import './../../../../assets/stylesheets/acount.css';

class DateHours extends Component {
    render() {
		return (
           <Col sm="4" >
                             <h3 className = "textBlue"> {Messages.registered}</h3>
                             <div>
                                 <FormGroup tag="fieldset"> 
                                     <legend>{Messages.specialist.chooseWork}</legend>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Կտրվածք (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup >
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Սանրվածք (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup >
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Ներկում (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup>
                                 </FormGroup>
                             </div>
                             <div>
                                 <FormGroup tag="fieldset">
                                     <legend>{Messages.specialist.chooseClock}</legend>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="radio1" />09։00 (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="radio1" />12։ 30  (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                     <FormGroup check disabled>
                                         <Label check>
                                             <Input type="radio" name="radio1"  />15։15  (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                 </FormGroup>
                             </div>
                             <Button type = "submit" color="info" > {Messages.specialist.confirmed} </Button>
                             
                         </Col>
		);
	}
}

export default DateHours; 