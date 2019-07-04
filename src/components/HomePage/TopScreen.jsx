import React, { Component } from 'react';

class TopScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <video  loop="1" muted="1" autoPlay="1" poster="/media/video/covervideo.mp4" width="100%" >
                    <source src="/media/video/covervideo.mp4" type="video/mp4"></source>
                </video>
                
                <div className="blogIntro">
                    <div className="blogTitle">Off-duty Cad blog</div>
                    <div className="blogBio">one with a little fear of depth and a great fear of shallow living</div>
                    <div className="blogBio">join me on my adventure</div>
                    {/* <i className="fal fa-long-arrow-down"></i> */}
                </div>

                <div style={{width: "10vw", position: "absolute", bottom: "2vh", left: "45vw", textAlign: "center"}}><i className="fas fa-long-arrow-alt-down" style={{color: "white", fontSize: "4em"}}></i></div>

            </div>
        );
    }
}

export default TopScreen;