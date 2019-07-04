import React, { Component } from 'react';

class NextButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span className="pageNumberContainer" >
                <button className="pageNumber" ><i className="fas fa-angle-right"></i></button>
            </span>
        );
    }
}

export default NextButton;