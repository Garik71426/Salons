import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import { Input, FormGroup, CustomInput, Label, Button, Form } from 'reactstrap';

import Messages from './../../../../Messages';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        UIStore: PropTypes.shape({
            calculate_age: PropTypes.func,
        }).isRequired,
        AppStore: PropTypes.shape({
            ui: PropTypes.shape({
                getWorker: PropTypes.func,
                getWorkerWorkImages: PropTypes.func,
                getSocial: PropTypes.func,
                getAllCategories: PropTypes.func,
                worker: PropTypes.object,
                workerWorkImages: PropTypes.array,
                social: PropTypes.array,
                allCategories: PropTypes.array,
            }).isRequired,
            salonAdmin: PropTypes.shape({
                getAllSocial: PropTypes.func,
                allSocial: PropTypes.array,
                setStoreProps: PropTypes.func,
                changeSalonInfo: PropTypes.func,
            }).isRequired,
        }).isRequired
    };

    componentDidMount() {
        const worker_id = this.props.match.params.specialist_id;
        const { getWorker, getWorkerWorkImages, getSocial, getAllCategories } = this.context.AppStore.ui;
        const { getAllSocial } = this.context.AppStore.salonAdmin;
        getWorker(worker_id);
        getWorkerWorkImages(worker_id);
        getSocial(worker_id);
        getAllCategories();
        getAllSocial();
        this.socialFiltter();
    }

    socialFiltter = () => {
        const { allSocial, social, setStoreProps } = this.context.AppStore.salonAdmin;
        for (let allSocialItem of allSocial) {
            for (let socialItem of social) {
                if (allSocialItem.id === socialItem.id) {
                    allSocialItem.path = socialItem.path;
                }
            }
        }
        setStoreProps(allSocial);
    };

    handleOnchange = event => {
        this.context.AppStore.salonAdmin.changeSalonInfo('worker', event);
    };

    calculate_date = date => {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    };

    // fun = event => {
    //     var formData = new FormData();
    //     formData.append('file', event.target.files[0]);
    //     formData.append('file', event.target.files[0]);
    //     console.log(formData)
    //     // const data = {
    //     //     worker_id: this.props.match.params.specialist_id,
    //     //     file: event.target.files[0]
    //     // }
    //     // this.context.AppStore.salonAdmin.changeSpecialistImg(data)
    // }

    render() {
        const { worker, workerWorkImages, allSocial } = this.context.AppStore.salonAdmin;
        const { allCategories } = this.context.AppStore.ui;
        const { handleOnchange } = this;
        const age = this.calculate_date(new Date(worker.b_day));
        return (
            <Container className="mb-5 sections mt-5 section">
                {worker && <>
                    <Row>
                                <form method="post" action="http://localhost:3001/salonAdmin/uploadImage" enctype="multipart/form-data">
                                    <input type="file" name="image" /><br /><br />
                                    <button type="submit" name="upload">Upload</button>
                                </form>
                        <Form>
                            <div className="user" >
                                {/* <Label for="changeImg">{Messages.AddWorker.image}</Label>
                                <Input type="file" id="changeImg" /> */}
                                <img src='http://localhost:3001/upload/1d3f5694-5126-4275-ac9c-904b3aabec9f.png' height="200px" alt="user image" width="200px" className="d-inline" />
                                <div className="info">
                                    <Label for="workerAbout">{Messages.AddWorker.information}</Label>
                                    <Input
                                        type="textarea"
                                        id='workerAbout'
                                        name='about'
                                        value={worker.about}
                                        onChange={handleOnchange}
                                    />
                                </div>
                            </div>
                            <h2 className="textBlue"> {Messages.specialist.information} </h2>
                            <FormGroup>
                                <Label for="name">{Messages.AddWorker.name}</Label>
                                <Input
                                    type="text"
                                    id='name'
                                    name='name'
                                    value={worker.name}
                                    onChange={handleOnchange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="surname">{Messages.AddWorker.surname}</Label>
                                <Input
                                    type="text"
                                    id='surname'
                                    name='surname'
                                    value={worker.surname}
                                    onChange={handleOnchange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">{Messages.specialist.age}</Label>
                                <Input
                                    type="date"
                                    id='age'
                                    name='age'
                                    value={age}
                                    onChange={handleOnchange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <p>Կատեգորիա</p>
                                {allCategories.map(item => {
                                    return <FormGroup check key={item.id}>
                                        <Label check>
                                            <Input type="radio" name="radio2"
                                                checked={item.name === worker.category_name}
                                            />
                                            {item.name}
                                        </Label>
                                    </FormGroup>
                                })}
                            </FormGroup>
                            <p>{Messages.specialist.socialMedia}</p>
                            {allSocial.map(item => {
                                return <FormGroup check key={item.id}>
                                    <Label>
                                        {item.name}
                                        <input type='text' value={item.path} />
                                    </Label>
                                </FormGroup>
                            })}
                        </Form>
                    </Row>
                    {workerWorkImages.length !== 0 &&
                        <Row className="mt-5">
                            <h1>{Messages.specialist.myWorkes}</h1>
                            <Row className="mt-5">
                                {workerWorkImages.map(item => {
                                    return <Col align="center" key={item.img}>
                                        <img src={item.img} alt="works image" className="d-inline " width="200px" height="200px" />
                                    </Col>
                                })}
                            </Row>
                        </Row>}
                </>}
                <Button>{Messages.AddWorker.save}</Button>
            </Container>
        );
    }
}

export default SpecialistUser;