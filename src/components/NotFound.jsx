import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <i className="far fa-exclamation-circle"></i>
                <h1 className="notFoundText">Page Not Found</h1>
            </div>
        );
    }
}

export default NotFound;