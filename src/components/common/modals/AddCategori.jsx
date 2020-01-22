// import React, {Component} from 'react';
// import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
// import PropTypes from 'prop-types';

// import './../../../../assets/stylesheets/salon.css';
// import Messages from './../../../Messages';


// class AddCategory extends Component {
//       static contextTypes = {
//            AppStore : PropTypes.shape({
//                _Data : PropTypes.array,
//                addCategory : PropTypes.func,
//                addCategoryChange : PropTypes.func,
//            }).isRequired
//       }
//   constructor(props) {
//       super(props);
//       this.state = {
//           modal: false,
//       };
//       this.toggle = this.toggle.bind(this);
//   }
//   toggle() {
//       this.setState(prevState => ({
//       modal: !prevState.modal
//       }));
//   }
//     render(){
//         const {addCategory, addCategoryChange, _Data} = this.context.AppStore;
//         const {salonIndex} = this.props;
//         return(
//           <div>
//             <Button onClick={this.toggle}  color="info" outline>{Messages.AddCategory.addCat}</Button>
//                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                         <ModalHeader toggle={this.toggle}>{Messages.AddCategory.AddCat}</ModalHeader>
//                         <ModalBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="examplenName">{Messages.AddCategory.nameCategory}</Label>
//                                     <Input type="text"  id="examplenName" onChange = {addCategoryChange}/>
//                                 </FormGroup>
   
//                             </Form>
//                         </ModalBody>
//                         <ModalFooter onClick = {this.toggle}>
//                           <Button color="info"  onClick={addCategory} salon-index = {salonIndex}>{Messages.AddCategory.confirmChanges}</Button>
//                         </ModalFooter>
//                     </Modal>
//           </div>
//         );
//     }
// }
// export default AddCategory
