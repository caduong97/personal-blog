import React, { Component } from 'react';
import PhotoCarousel from './PhotoCarousel'
import PhotoGallery from './PhotoGallery'
import SubGallery from './SubGallery'

class Pics extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <div>
                <PhotoCarousel />
                <PhotoGallery />
                <SubGallery />
            </div>
        );
    }
}

export default Pics;