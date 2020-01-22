import React, {Component} from 'react';
import { Form, Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../../Messages';

@observer
class Search extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    }
    state = {
        
    }
    componentDidMount() {
        
    }
    componentDidUpdate(prevProps) {

    }
    render(){
        return(
                <Form className="form_pos mt-5">
                    <Label><b>{Messages.table.searchFor}</b></Label>
                    <FormGroup check inline >
                        <FormGroup check>
                            <Label check>

                                <Input type="radio" name="search" value="name" defaultChecked />{Messages.table.forName}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                             <Label check>
                                 <Input type="radio" value="surname" name = "search" />{Messages.table.forSurname}
                             </Label>
                         </FormGroup>
                         <FormGroup check>
                              <Label check>
                                  <Input type="radio" value="salonAddress" name = "search" />{Messages.table.forAddress}
                              </Label>
                          </FormGroup>
                          <FormGroup check>
                               <Label check>
                                   <Input type="radio" value="salonTitle" name = "search" />{Messages.table.forSalon}
                               </Label>
                          </FormGroup>
                    </FormGroup>
                    <Input type="search"  className="input_search" id="exampleSearch" />
                </Form>
        );
    }
}
export default Search;