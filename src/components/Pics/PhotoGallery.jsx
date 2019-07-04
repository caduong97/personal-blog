import React, { Component } from 'react';
import SinglePhotoModal from './SinglePhotoModal'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalShow: false,
            imgUrl: ""
        };

        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    showModal = (src) => {
        this.setState({
            modalShow: true,
            imgUrl: src
        });
    }

    closeModal = () => {
        this.setState({
            modalShow: false,
            imgUrl: ""
        });
    }

    render() {
        return (
            <div className="galleryContainer">
                <div className="galleryGridContainer" >
                    <div className="galleryGrid">
                        <figure className="galleryItem galleryItem--1" >
                            <img className="gridImg" src="/media/pexels-photo-551590.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-551590.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--2" >
                            <img className="gridImg" src="/media/pexels-photo-132340.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-132340.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--3">
                            <img className="gridImg" src="/media/maxresdefault.jpg" alt="jdncjsndj" onClick={() => this.showModal("/media/maxresdefault.jpg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--4">
                            <img className="gridImg" src="/media/pexels-photo-1389994.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-1389994.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--5">
                            <img className="gridImg" src="/media/pexels-photo-705821.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-705821.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--6">
                            <img className="gridImg" src="/media/pexels-photo-450271.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-450271.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--7">
                            <img className="gridImg" src="/media/IMG_0071.JPG" alt="jdncjsndj" onClick={() => this.showModal("/media/IMG_0071.JPG")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--8">
                            <img className="gridImg" src="/media/pexels-photo-2115661.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-2115661.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--9">
                            <img className="gridImg" src="/media/pexels-photo-1068523.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-1068523.jpeg")}/>
                        </figure>
                        <figure className="galleryItem galleryItem--10">
                            <img className="gridImg" src="/media/pexels-photo-1029286.jpeg" alt="jdncjsndj" onClick={() => this.showModal("/media/pexels-photo-1029286.jpeg")}/>
                        </figure>
                    </div>
                </div>

                <div className="row galleryButtons">
                    
                    <div className="col-lg-4" />
                    <div className="col-lg-4 row">
                        <button id="before" className="col-lg-5 galleryButton" type="button">before</button>
                        <span className="col-lg-2"/>
                        <button id="loadmore" className="col-lg-5 galleryButton" type="button">load more</button>
                    </div>
                    <div className="col-lg-4" />
                </div>

                <SinglePhotoModal 
                    show={this.state.modalShow}
                    onHide={this.closeModal}
                    imgSrc = {this.state.imgUrl}
                />

            </div>

        );
    }
}

export default PhotoGallery;