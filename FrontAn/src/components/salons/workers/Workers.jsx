import React,{Component} from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';
import UserCard from './../../common/cards/UserCard';

class Workers extends Component {   
    static propTypes = {
        workers: PropTypes.array.isRequired,
    } 
    render() {
        const { workers } = this.props;
		return (
            <Row>
                {workers.map((specialistItem, specialistIndex) => {
                    return <React.Fragment key = {`${specialistItem.img} ${specialistIndex}`}> 
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