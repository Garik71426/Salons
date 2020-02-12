import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import Messages from './../../../Messages';

@observer
class CardSearch extends Component {
    static propTypes = {
        worker: PropTypes.object.isRequired
    }
    render() {
        const { worker } = this.props;
        return (<Card className="Card_top">
            <Media className="text">
                <img src={worker.img || '/images/specialist.png'} alt="specialistImg" height = '200px'/>
                <Media body className="full_text">
                    <Media heading className="name_title">
                        {`${worker.name} ${worker.surname}`}
                    </Media>
                    {Messages.table.userAddress}` {worker.salon_address}
                    <div>{Messages.table.beautySalonName}`  {worker.salon_name}</div>
                </Media>
                <Link to={`/specialist/${worker.id}`}>
                    <Button className="btn_card_category" outline color="info">Մանրամասն</Button>
                </Link>
            </Media>
        </Card>
        );
    }
}

export default CardSearch;
