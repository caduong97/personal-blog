import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        
    }

    render() {
        return (
            <div className="postSearch">
                <input type="text" placeholder="&#xf002;"/>
            </div>
        );
    }
}

export default SearchBar;