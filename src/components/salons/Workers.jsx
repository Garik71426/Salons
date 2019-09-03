import React,{Component} from 'react';
import { Row, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import SalonAddWorker from './modals/SalonAddWorker';

import Messages from './../../Messages';
import CardCategory from './../cards/CardCategory';

@observer
class Workers extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            deleteCategory : PropTypes.func,
            deleteWorker : PropTypes.func,
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
    }
    
    render() {
        const { deleteWorker, isUser } = this.context.AppStore;
        
        const { workers } = this.state;
        const { salon_id, category_id } = this.props;
		return (
            <Row>{workers.map((specialistItem, specialistIndex) => {
                    return <React.Fragment key = {specialistIndex}> 
                        {(isUser === 'salon')?
                        <CardCategory 
                            deleteCard = {<Button color="danger" className="delete" onClick = {deleteWorker} salon-index = {salon_id} category-index = {category_id} specialist-index = {specialistIndex}>X</Button>}
                            img={specialistItem.img}
                            title= {`${specialistItem.name} ${specialistItem.surname}`}
                            name = {`${salon_id}/${category_id}/${specialistIndex}`}
                            buttonText = {Messages.table.specialiistButtonText}
                            //url = {this.props.match.url}
                            />:
                        <CardCategory 
                            img={specialistItem.img}
                            title= {`${specialistItem.name} ${specialistItem.surname}`}
                            name = {`${salon_id}/${category_id}/${specialistIndex}`}
                            buttonText = {Messages.table.specialiistButtonText}
                            //url = {this.props.match.url}
                            />}
                    </React.Fragment>
                })}
                {isUser === 'salon' && <SalonAddWorker salonIndex = {salon_id} categoryIndex = {category_id}/>}
            </Row>
		);
	}
}

export default Workers;