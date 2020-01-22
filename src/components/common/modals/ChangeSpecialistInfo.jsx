// import React, {Component} from 'react';
// import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
// import PropTypes from 'prop-types';
// import {observable} from "mobx";
// import {observer} from "mobx-react";

// import Messages from './../../../Messages';

// import Validator from './../../../stores/validator';

// import './../../../../assets/stylesheets/salon.css';

// @observer
// class ChangeSpecialistInfo extends Component {

//     static contextTypes = {
//         AppStore : PropTypes.shape({
//             changeSpeciaistInfo : PropTypes.func,
//             changeSpecialistSubmit : PropTypes.func,
//             _Data : PropTypes.array,
//             defaultSpecialistImage : PropTypes.string,
//             AddWorkerImg : PropTypes.func

//         }).isRequired
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             modal: false,
//         };
//         this.toggle = this.toggle.bind(this);
//     }
//     toggle(event) {
//         this.setState(prevState => ({
//         modal: !prevState.modal
//         }));
//         if(event.target.textContent === Messages.AddWorker.modifyData){
//         const {_Data, changeSpecialistInfo} = this.context.AppStore;

//         const {salonIndex, categoryIndex, specialistIndex} = this.props;
//         const specialist = _Data[salonIndex].category[categoryIndex].workers[specialistIndex];
//         changeSpecialistInfo.name = specialist.name;
//         changeSpecialistInfo.surname = specialist.surname;
//         changeSpecialistInfo.age = specialist.age;
//         changeSpecialistInfo.info = specialist.textAbout;
//         changeSpecialistInfo.mail = specialist.socialNetwork;
//         changeSpecialistInfo.img = specialist.img;
//     }
//     }

//     // Validator = new Validator();

//     // handleUserInput = (event) => {
//     //      this.context.AppStore.changeSpeciaistInfo(event);
//     //      this.Validator.informationSpecialistInfo.fieldName = event.target.name;
//     //      this.Validator.informationSpecialistInfo.value = event.target.value;       
//     // }
//     render(){
//         const {changeSpecialistSubmit,changeSpecialistInfo, defaultSpecialistImage, AddWorkerImg, changeSpeciaist} = this.context.AppStore;
//         const {salonIndex, categoryIndex, specialistIndex} = this.props;
//         return(
//             <>
//                 <Button onClick={this.toggle} color="info" outline>{Messages.AddWorker.modifyData}</Button>
//                         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                             <ModalHeader toggle={this.toggle}>{Messages.AddWorker.modifyData}</ModalHeader>
//                             <ModalBody>
//                                 <Form>
//                                     <FormGroup>
//                                         <Label for="exampleFile">{Messages.AddWorker.image}</Label>
//                                         <Input className="name" width="100px" type="file" name="file" id="exampleFile"
//                                             onChange={changeSpeciaist}
//                                         />
//                                         <img id="target" src={changeSpecialistInfo.img} width="250px" height="250px"/>
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Label for="exampleName">{Messages.AddWorker.name}</Label>
//                                         <Input onChange={changeSpeciaist} type="text" name="name" id="exampleName" value={changeSpecialistInfo.name}/>
//                                         {/*<p className="has-error">{this.Validator.informationSpecialistInfo.fieldName === 'name' && this.Validator.validateSpecialistInfo}</p>
//   */}                                  </FormGroup>
//                                     <FormGroup>
//                                         <Label for="exampleSurname">{Messages.AddWorker.surname}</Label>
//                                         <Input onChange={changeSpeciaist} type="text" name="surname" id="exampleSurname" value={changeSpecialistInfo.surname}/>
//                                         {/*<p className="has-error">{this.Validator.informationSpecialistInfo.fieldName === 'surname' && this.Validator.validateSpecialistInfo}</p>*/}
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <Label for="exampleAge">{Messages.AddWorker.age}</Label>
//                                         <Input onChange={changeSpeciaist} type="text" name="age" id="exampleAge" value={changeSpecialistInfo.age}/>
//                                         {/*<p className="has-error">{this.Validator.informationSpecialistInfo.fieldName === 'age' && this.Validator.validateSpecialistInfo}</p>
//    */}                                 </FormGroup>
//                                     <FormGroup>
//                                         <Label for="exampleInfo">{Messages.AddWorker.information}</Label>
//                                         <Input onChange={changeSpeciaist} type="textarea" name="info" id="exampleInfo" value={changeSpecialistInfo.info}/>
//                                         {/*<p className="has-error">{this.Validator.informationSpecialistInfo.fieldName === 'info' && this.Validator.validateSpecialistInfo}</p>
//   */}                                  </FormGroup>
//                                     <FormGroup>
//                                         <Label for="exampleEmail">{Messages.AddWorker.connectionWithSocialMedia}</Label>
//                                         <Input onChange={changeSpeciaist} type="text" name="mail" id="exampleEmail" value={changeSpecialistInfo.mail}/>
// {/*                                        <p className="has-error">{this.Validator.informationSpecialistInfo.fieldName === 'mail' && this.Validator.validateSpecialistInfo}</p>
// */}                                    </FormGroup>
                                    
//                                 </Form>
//                             </ModalBody>
//                             <ModalFooter onClick = {this.toggle}>
//                                 <Button   onClick={changeSpecialistSubmit} specialist-index={specialistIndex} salon-index={salonIndex} category-index={categoryIndex}>{Messages.AddWorker.confirmChanges}</Button>
//                             </ModalFooter>
//                         </Modal>
//             </>
//         );
//     }
// }
// export default ChangeSpecialistInfo;
// // disabled={!this.Validator.informationSpecialistInfo.formValid}  sa petqa dneinq bayc sxala talis
// //sranq registri u logini mej el petqa avelacvi

