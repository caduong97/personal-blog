import React, { Component } from 'react';
// import SinglePostSection from './SinglePostSection'

class PostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.renderRandomPost = this.renderRandomPost.bind(this)
    }

    renderRandomPost() {
        let ran1 = Math.floor(Math.random() * 6);
        let ran2;
        let i = 1;
        while(i > 0) {
            ran2 = Math.floor(Math.random() * 6);
            if (ran2 === ran1)
                i++;
            else 
                break;
        }
        let ran3;
        let j = 1;
        while(j > 0) {
            ran3 = Math.floor(Math.random() * 6);
            if (ran3 === ran1 || ran3 === ran2)
                i++;
            else 
                break;
        }
        console.log(ran1 + " " + ran2 + " " + ran3);
        let rans = [ran1,ran2,ran3];

        return rans;
        
        
    }

    
    
    render() {
        let rans = this.renderRandomPost();
        
        return (
            <div className="postSectionContainer">
                
                <div className="homeGridContainer">
                    <div className="subHomeGrid2">
                        <div className="postDate--1">{this.props.posts[0].postdate}</div>
                        <div className="postDate--2">{this.props.posts[1].postdate}</div>
                        <div className="postDate--3">{this.props.posts[2].postdate}</div>
                    </div>

                    <div className="homeGrid2">
                        
                        {/* <SinglePostSection 
                            contClass = "postContainerDiv1"
                            figClass = "postCoverPhoto--1"
                            imgSrc = {this.props.posts[2].displayImg}
                            divClass = "postContent postContent--1"
                            divCont = {this.props.posts[2].content.substr(0,150)}
                            hrClass = "postEndLine postEndLine--1"
                        />
                        
                        <SinglePostSection 
                            contClass = "postContainerDiv2"
                            figClass = "postCoverPhoto--2"
                            imgSrc = {this.props.posts[0].displayImg}
                            divClass = "postContent postContent--2"
                            divCont = {this.props.posts[0].content.substr(0,150)}
                            hrClass = "postEndLine postEndLine--2"
                        />
                        
                        <SinglePostSection 
                            contClass = "postContainerDiv3"
                            figClass = "postCoverPhoto--3"
                            imgSrc = {this.props.posts[5].displayImg}
                            divClass = "postContent postContent--3"
                            divCont = {this.props.posts[5].content.substr(0,150)}
                            hrClass = "postEndLine postEndLine--3"
                        /> */}
                        
                        <figure className="postCoverPhoto--1">
                            <img className="gridImg"  src={this.props.posts[rans[0]].displayImg} alt="child face" />
                        </figure>
                        <div className="postContent postContent--1">{this.props.posts[rans[0]].content.substr(0,200)}...</div>
                        <hr className="postEndLine postEndLine--1"></hr>
                        <figure className="postCoverPhoto--2">
                            <img className="gridImg"  src={this.props.posts[rans[1]].displayImg} alt="child face" />
                        </figure>
                        <div className="postContent postContent--2">{this.props.posts[rans[1]].content.substr(0,200)}...</div>
                        <hr className="postEndLine postEndLine--2"></hr>
                        <figure className="postCoverPhoto--3">
                            <img className="gridImg" src={this.props.posts[rans[2]].displayImg} alt="child face" />
                        </figure>
                        <div className="postContent postContent--3">{this.props.posts[rans[2]].content.substr(0,200)}...</div>
                        <hr className="postEndLine postEndLine--3"></hr>
                    </div>

                </div>
            

                <div>
                    <button onClick={this.props.setRedirect} value="/posts/all"  className="seemoreButton"  type="button">see more posts</button>
                </div>
            </div>
        );
    }
}

export default PostSection;