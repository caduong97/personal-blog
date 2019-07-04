import React, { Component } from 'react';

import MainPostContent from './MainPostContent'

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <MainPostContent />
            </div>
        );
    }
}

export default SinglePost;