import React, {Component} from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {Link}  from 'react-router-dom';

@observer
class CategorysNavigator extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    }
    state = {
        categorys: []
    }
    componentDidMount() {
       fetch(`http://localhost:3001/category`)
        .then(res => res.json())
        .then(
            (categorys) => {
                this.setState({ categorys: categorys })
            },
            (error) => {
                console.log(error);
            }
        )
    };
    render(){
        const { categorys } = this.state;
        return(
                <ButtonToolbar className="mt-5">
                    <ButtonGroup className = "group">
                        {categorys.map(item => {
                            return <Link to={`/Category/${item.id}`} key = {item.id} >
                                        <Button className = "category_button" color = "info">{item.name}</Button>
                                    </Link>
                        })}
                    </ButtonGroup>
                </ButtonToolbar>
        );
    }
}
export default CategorysNavigator
