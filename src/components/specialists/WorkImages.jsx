import React, { Component } from 'react';
import {Button, Row, Col, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class WorkImages extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            isUser : PropTypes.string,
            deleteWorksImage : PropTypes.func,
        }).isRequired
    };
    state = {
        workImgs: []
    }
    componentDidMount() {
        fetch(`http://localhost:3001/worker/${this.props.specialist}/works`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({ workImgs: result })    
            },
            (error) => {
                console.log(error);
            }
        )        
    }

    render() {
        const { deleteWorksImage, isUser, changeSpeciaistWorkImages} = this.context.AppStore;
        const { workImgs } =  this.state;
        const { specialist} = this.props
        return (
            <Row className = "mt-5">
            {workImgs.map((item, index) => {
                    return <React.Fragment key = {index}>
                    {(isUser === 'salon') ?
                        <Col align = "center">
                        <div className = "change_spec_img">
                            <Button color="danger" 
                                className="delete" salon-name={specialist.salonTitle} onClick = {deleteWorksImage} data-index = {index} 
                                specialist-index = {specialist.id} salon-index={specialist.salon_id} category-index={specialist.category_id}>X</Button>
                            <Input className="name_add"  type="file" name="file" id="exampleFile"
                                onChange={changeSpeciaistWorkImages} specialist-index = {specialist.id} salon-index={specialist.salon_id} 
                                category-index={specialist.category_id} index={index}
                            />
                            <img src={item.img} alt="works image" className ="d-inline "  width="200px" height="200px" />
                        </div>
                        </Col>:
                        <Col align = "center">
                            <img src={item.img} alt="works image" className ="d-inline " width="200px" height="200px" />
                        </Col>
                    }
                    </React.Fragment>
                })}
            </Row>
        );
    }
}

export default WorkImages;
