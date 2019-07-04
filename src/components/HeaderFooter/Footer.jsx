import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="row footer">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 footerCent">
                    <img src="/media/logo.png" alt="logo" />
                    <div className="subFooter1">SIGN UP FOR WEEKLY NEWSLETTERS!!!</div>
                    <div className="row subFooter2">
                        <input className="col-lg-8 signUpBox" type="text" placeholder="your email :)" />
                        <button className="col-lg-4 signUpButton" type="button" value="SIGN UP">sign up</button>
                    </div>
                    <div className="row subFooter3">
                        <span className="col-lg-1"></span>
                        <i className="col-lg-2 fab fa-instagram"></i>
                        <i className="col-lg-2 fab fa-facebook-square"></i>
                        <i className="col-lg-2 fab fa-youtube-square"></i>
                        <i className="col-lg-2 fab fa-twitter-square"></i>
                        <i className="col-lg-2 fab fa-pinterest-square"></i>
                        <span className="col-lg-1"></span>
                    </div>
                    <div className="row subFooter4">
                        <span className="col-lg-4">&copy; 2019 Ca Duong</span>
                        <span className="col-lg-4">About me</span>
                        <span className="col-lg-4">Privacy Policy</span>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
            
        );
    }
}

export default Footer;