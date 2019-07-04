import React, { Component } from 'react';

class SubGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="subGalleryContainer">
                <img className="subGalleryCover" src="/media/pexels-photo-1105766.jpeg" alt="urban" />
                {/* <img className="subGalleryItem" src="/media/pexels-photo-1112540.jpeg" alt="face1" /> */}
                {/* <img className="subGalleryItem" src="/media/pexels-photo-1572878.jpeg" alt="face2" /> */}
                {/* <img className="subGalleryItem" src="/media/pexels-photo-1156546.jpeg" alt="face3" /> */}
                <div className="subGalleryItem1"> <img className="subGalleryItemImg1" src="/media/pexels-photo-1572878.jpeg" alt="face1" /></div>
                <div className="subGalleryItem2"> <img className="subGalleryItemImg2" src="/media/pexels-photo-2291373.jpeg" alt="face2"  /></div>
                <div className="subGalleryItem3"> <img className="subGalleryItemImg3" src="/media/pexels-photo-1156546.jpeg" alt="face3"  /></div>

            </div>
        );
    }
}

export default SubGallery;