import React, { Component } from 'react';

class PrevButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span className="pageNumberContainer" >
                <button className="pageNumber" style={this.props.style}><i className="fas fa-angle-left"></i></button>
            </span>
        );
    }
}

export default PrevButton;