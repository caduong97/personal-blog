import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            stickyNav: ""
        };
    }

    displayNavWhenScrolled  =() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.setState({
                    stickyNav: ''
                });

            }
            else {
                this.setState({
                    stickyNav: 'header-container'
                });

            }
        };
    }

    render() {
        this.displayNavWhenScrolled();
        return (
            <div className={this.state.stickyNav}>
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <ul className="col-lg-4 row">
                                <li className="col-lg-3"><NavLink exact to='/'>home</NavLink></li> 
                                                                {/* exact is for displaying css purpose: only 1 nav item is active at a time */}
                                <li className="col-lg-3"><NavLink to='/posts/all'>post</NavLink></li>
                                <li className="col-lg-3"><NavLink to='/pics'>pics</NavLink></li>
                                <li className="col-lg-3"><NavLink to='/vlog'>vlog</NavLink></li>
                            </ul>
                            <div className="col-lg-4"></div>
                        </div>
                        
                        
            </div>
        );
    }
}

export default Header;