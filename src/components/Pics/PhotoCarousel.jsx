import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class PhotoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            // index: 0,
            // direction: null,
        };
        // this.handleSelect = this.handleSelect.bind(this);

    }

    

    // handleSelect(direction) {
    //     if (direction === "next") {
    //         if(this.state.index < 2) {
    //             this.setState({
    //                 state: this.state.index + 1
    //             });
                
    //         } else {
    //             this.setState({
    //                 state: 0
    //             });
    //         }
    //     } else if (direction === "prev") {
    //         if(this.state.index > 0) {
    //             this.setState({
    //                 state: this.state.index - 1
    //             });
    //         } else {
    //             this.setState({
    //                 state: 2
    //             });
    //         }
    //     }
        


        // this.setState({
        //     index: selectedIndex,
        //     direction: e.direction
        // });
        // console.log(this.state.index);
    // }

    render() {
        console.log(this.state.index);
        return (
            <div className="row">
                <div className="col-lg-12 col-centered carousel">
                    <Carousel 
                        controls="true"
                        interval="3000"
                        
                        // activeIndex={this.state.index}
                        // direction={this.state.direction}
                        // onSelect={this.handleSelect} 
                        // nextIcon={<span className="fas fa-chevron-right" onClick={() => this.handleSelect('next')}></span>}
                        // prevIcon={<span className="fas fa-chevron-left" onClick={() => this.handleSelect('prev')}></span>}
                    >
                        
                        <Carousel.Item>
                            <img
                            // className="d-block"
                            src="/media/pexels-photo-747964.jpeg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Welcome to my photo gallery</h3>
                            <p>Scroll down to explore!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            // className="d-block"
                            src="/media/pexels-photo-1509428.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Welcome to my photo gallery</h3>
                            <p>Scroll down to explore!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            // className="d-block"
                            src="/media/pexels-photo-273222.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Welcome to my photo gallery</h3>
                            <p>Scroll down to explore!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>;
                </div>
            </div>
        );
    }
}

export default PhotoCarousel;