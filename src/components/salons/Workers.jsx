import React,{Component} from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../Messages';
import CardCategory from './../cards/CardCategory';

class Workers extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({

        }).isRequired
    }
    state = {
        workers: [], 
    };
    componentDidMount() {
        fetch(`http://localhost:3001/salon//workers/${this.props.category_id}/${this.props.salon_id}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ workers: result})
            },
            (error) => {
                console.log(error);
            }
        )
    }

    componentDidUpdate(prevProps){
        if(this.props.category_id !== prevProps.category_id 
            && this.props.salon_id !== prevProps.salon_id) {
            fetch(`http://localhost:3001/salon/workers/${this.props.category_id}/${this.props.salon_id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ workers: result})
                },
                (error) => {
                    console.log(error);
                }
            )
        }
    }
    
    render() {
        const { workers } = this.state;
		return (
            <Row>{workers.map((specialistItem, specialistIndex) => {
                    return <React.Fragment key = {specialistIndex}> 
                        <CardCategory 
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