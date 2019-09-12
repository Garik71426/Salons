import React,{Component} from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import Messages from './../../Messages';
import UserCard from './../cards/UserCard';

class Workers extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({

        }).isRequired
    }
    state = {
        workers: [], 
    };
    componentDidMount() {
        axios.get(`http://localhost:3001/salon//workers/${this.props.category_id}/${this.props.salon_id}`)
        .then(result => {
            this.setState({ workers: result.data });
        })
        .catch(err => {
            return err;
        });
    }

    componentDidUpdate(prevProps){
        if(this.props.category_id !== prevProps.category_id 
            && this.props.salon_id !== prevProps.salon_id) {
            axios.get(`http://localhost:3001/salon//workers/${this.props.category_id}/${this.props.salon_id}`)
            .then(result => {
                this.setState({ workers: result.data });
            })
            .catch(err => {
                return err;
            });
        }
    }
    
    render() {
        const { workers } = this.state;
		return (
            <Row>{workers.map((specialistItem, specialistIndex) => {
                    return <React.Fragment key = {specialistIndex}> 
                        <UserCard 
                            img={specialistItem.img}
                            title= {`${specialistItem.name} ${specialistItem.surname}`}
                            id = {specialistItem.id}
                            buttonText = {Messages.table.specialiistButtonText}
                            url = 'specialist'
                        />
                    </React.Fragment>
                })}
            </Row>
		);
	}
}

export default Workers;