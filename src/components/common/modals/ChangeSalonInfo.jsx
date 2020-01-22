// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
// import PropTypes from 'prop-types';
// import {observer} from 'mobx-react';

// import Messages from './../../../Messages';

// import Validator from './../../../stores/validator';

// import './../../../../assets/stylesheets/setting.css';

// @observer
// class ChangeSalonInfo extends Component {
//   static contextTypes = {
// 	AppStore : PropTypes.shape({
// 	  changeSalonInfo : PropTypes.func,
// 	  changeSalonSubmit : PropTypes.func,
// 	  _Data : PropTypes.array,
// 	  AddWorkerImg : PropTypes.func,
// 	  defaultSpecialistImage : PropTypes.string
// 	}).isRequired
//   }

//   constructor(props) {
// 	super(props);
// 	this.state = {
// 	  modal: false
// 	};

// 	this.toggle = this.toggle.bind(this);
//   }

//   toggle(event) {
// 	this.setState(prevState => ({
// 	  modal: !prevState.modal
// 	}));
//     const {_Data, changeSalon} = this.context.AppStore;
//     const {salonindex} = this.props;
//     const salon = _Data[salonindex];
//     changeSalon.name = salon.name;
//     changeSalon.info = salon.info;
//     changeSalon.address = salon.address;
//     changeSalon.phone = salon.phone;
//     changeSalon.img = salon.img;
//   }

//   render() {
// 	const {changeSalonSubmit, _Data, changeSalon, AddWorkerImg, changeSalonInfo, validator, validatorItems} = this.context.AppStore;
// 	const {salonindex} = this.props;
//     const salon = _Data[salonindex];
   
// 	return (
// 	  <div>
// 		<Button outline color="info" onClick={this.toggle}>{Messages.settings.settingsName}</Button>
// 		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
// 			<ModalHeader toggle={this.toggle}>{Messages.settings.settingsName}</ModalHeader>
// 			<ModalBody>
// 				<Form >
// 					<FormGroup>
// 						<Label for = "exampleFile">{Messages.settings.insertImg}</Label> 
// 							<Input className="name" width="100px" type="file" name="file" id="exampleFile"
//                                     onChange={changeSalonInfo}
//                                         />
//                             <img id="target" src={changeSalon.img} width="250px" height="250px"/>
						  
// 					</FormGroup>
// 					<FormGroup>
// 						<Label for = "exampleName">{Messages.settings.name}</Label>
// 							<Input type="text" name="name" id="exampleName" onChange={changeSalonInfo} value={changeSalon.name}/>						
// 							<p className="has-error">{validatorItems.fieldName === 'name' && validator}</p>
// 					</FormGroup>
//                     <FormGroup>
// 						<Label for = "exampleInfo">{Messages.settings.ourSet}</Label>
// 							<Input type="textarea" name="info" id="exampleInfo" onChange={changeSalonInfo} value={changeSalon.info}/>		
// 							<p className="has-error">{validatorItems.fieldName === 'info' && validator}</p>				
// 					</FormGroup>
// 					<FormGroup>
// 						<Label for = "exampleAddress">{Messages.settings.adress}</Label>
// 							<Input type="text" name="address" id="exampleAddress" onChange={changeSalonInfo} value={changeSalon.address} min="5" max="30"/>
// 							<p className="has-error">{validatorItems.fieldName === 'address' && validator}</p>
// 					</FormGroup>
// 					<FormGroup>
// 						<Label for = "examplePhone">{Messages.settings.phone}</Label>
// 							<Input type="text" name="phone" id="examplePhone" onChange={changeSalonInfo} value={changeSalon.phone}/>
// 							<p className="has-error">{validatorItems.fieldName === 'phone' && validator}</p>
// 					</FormGroup>
//                     <FormGroup>
//                         <select onChange = {(event) => { 
//                                 changeSalon.prof = event.target.value;
//                                 changeSalon.profSelected = event.target.value}}>
//                             <option></option>
//                             {salon.category.map(item => {
//                                 return <option key = {item.prof}>{item.prof}</option>
//                             })}
//                         </select>
// 						<Label for = "exampleCategory">{Messages.settings.category}</Label>
// 							<Input type="text" name="category" id="exampleCategory" onChange={changeSalonInfo} value={changeSalon.prof}/>
// 							<p className="has-error">{validatorItems.fieldName === 'category' && validator}</p>
// 					</FormGroup>   
// 				</Form>
// 			</ModalBody>
// 			<ModalFooter onClick = {this.toggle}>
// 				<Button color="info" disabled={!validatorItems.formValid}  onClick={changeSalonSubmit} salon-index = {salonindex}>{Messages.settings.saveChange}</Button>
// 			</ModalFooter>
// 		</Modal>
// 	  </div>
// 	);
//   }
// }

// export default ChangeSalonInfo;
// // disabled={!this.Validator.informationChangeSalon.formValid}  sa petqa dneinq bayc sxala talis