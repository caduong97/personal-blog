import React, { Component } from 'react';

class PostTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="row postTitleContainer">
                <div className="col-lg-3 postTitleImgContainer"><img className="postTitleImg" src={this.props.imgSrc} alt="postpicture" /></div>
                <div className="col-lg-9 postTitleContent">
                    <div className="postTitleDate">{this.props.date}</div>
                    <div className="postTitle">{this.props.postTitle}</div>
                    <div className="postTitleBrief">{this.props.postBrief}</div>
                    <hr className="postTitleEndline"></hr>
                </div>
            </div>
        );
    }
}

export default PostTitle;