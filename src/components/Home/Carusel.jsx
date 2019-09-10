import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl} from 'reactstrap';
//import PropTypes from 'prop-types';

import {homeConfigs} from './../../config/categoryConfig';



class Example extends Component {
//    static propTypes = {
//
//    }
    state = { 
        activeIndex: 0 
    };

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === homeConfigs.slideItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? homeConfigs.slideItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }
    render() {
        const { activeIndex } = this.state;
        const slides = homeConfigs.slideItems.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    >
                    <img src = {item.Img} alt = {item.altText} width = "100%" />
                </CarouselItem>
            );
        });
        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                                max-width: 100%;
                                height: 70vh;
                        }`
                    }
                </style>
                <Carousel
                    
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="size"
                    >
                    {slides}
                    <CarouselControl
                        className="next_prev"
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous} 
                        />
                    <CarouselControl
                        className="next_prev"
                        direction="next"
                        directionText="Next" 
                        onClickHandler={this.next}
                        />
                </Carousel>
            </div>
        );
    }
}

export default Example;
