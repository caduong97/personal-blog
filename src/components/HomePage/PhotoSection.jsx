import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'

class PhotoSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayQuote: "none"
        };
        // this.showQuoteOnScroll = this.showQuoteOnScroll.bind(this)
    }

    // showQuoteOnScroll = () => {
    //     document.addEventListener('scroll', () => {
    //         var elementTarget = document.getElementById("showQuoteAfterThisDiv");
    //         if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    //             console.log("You've scrolled past the second div");
    //             this.setState({
    //                 displayQuote: "block"
    //             });


    //         }
    //     });
            
    // }
    

    
    render() {
        // this.showQuoteOnScroll();
        return (
            <div>
                <div className="homeGridContainer" value="/pics" onClick={this.props.setRedirect}  >
                {/* {this.renderRedirect()} */}
                {/* onClick={this.props.renderRedirect} */}
                    <div className="homeGrid">
                        <figure className="photoSectionItem photoSectionItem--1">
                            <img className="gridImg" src="/media/pexels-photo-551590.jpeg" alt="child face" />
                        </figure>
                        <figure className="photoSectionItem photoSectionItem--2">
                            <img className="gridImg" src="/media/IMG_0071.JPG" alt="Italian Trulli" />
                        </figure>
                        <figure className="photoSectionItem photoSectionItem--3">
                            <img className="gridImg" src="/media/pexels-photo-1389994.jpeg" alt="child face" />
                        </figure>
                        <figure className="photoSectionItem photoSectionItem--4">    
                            <img className="gridImg" src="/media/pexels-photo-1029286.jpeg" alt="Italian Trulli" />
                        </figure>
                        <figure className="photoSectionItem photoSectionItem--5">
                        <img className="gridImg" src="/media/pexels-photo-132340.jpeg" alt="child face" />
                        </figure>
                        <figure className="photoSectionItem photoSectionItem--6">
                            <img className="gridImg" src="/media/maxresdefault.jpg" alt="Italian Trulli" />
                        </figure>
                    </div>
                </div>

                <div>
                    
                    <button id="showQuoteAfterThisDiv" className="seemoreButton" type="button" value="/pics" onClick={this.props.setRedirect}>see more pics</button>
                    {/* {this.renderRedirect()} */}
                    {/* above renderRedirect has to has () because im calling it as a function, not returning anything */}
                </div>

                <div className="coverPhotoContainer">
                    <img className="coverPhoto" src="/media/pexels-photo-248159.jpeg" alt="sunset road" />
                    <div className="quoteOverCoverPhoto" style={{display: this.state.displayQuote}}>"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." - Ralph Waldo Emerson </div>

                </div>


            </div>

        );
    }
}

export default PhotoSection;