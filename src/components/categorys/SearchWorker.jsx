import React, {Component} from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';

import './../../../assets/stylesheets/table.css';

@observer
class SearchWorker extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            tableSearch : PropTypes.func,
            onChaked : PropTypes.func,
        }).isRequired
    }
    state = {
        
    }
    componentDidMount() {
        
    }
    componentDidUpdate(prevProps) {

    }
    render(){
        const { onChaked, tableSearch } =this.context.AppStore;
        return(
                <Form className="form_pos mt-5">
                <Label><b>{Messages.table.searchFor}</b></Label>
                <FormGroup check inline >
                        <FormGroup check>
                            <Label check>

                                <Input type="radio" name="search" value="name" onChange = {onChaked} defaultChecked />{Messages.table.forName}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                             <Label check>
                                 <Input type="radio" value="surname" name = "search" onChange = {onChaked}/>{Messages.table.forSurname}
                             </Label>
                         </FormGroup>
                         <FormGroup check>
                              <Label check>
                                  <Input type="radio" value="salonAddress" name = "search" onChange = {onChaked}/>{Messages.table.forAddress}
                              </Label>
                          </FormGroup>
                          <FormGroup check>
                               <Label check>
                                   <Input type="radio" value="salonTitle" name = "search" onChange = {onChaked}/>{Messages.table.forSalon}
                               </Label>
                          </FormGroup>
                        </FormGroup>
                        <Input type="search"  className="input_search" id="exampleSearch" onChange={tableSearch}/>
                </Form>
        );
    }
}
export default SearchWorker;