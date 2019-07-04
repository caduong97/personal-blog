import React, { Component } from 'react';

class PageNumber extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: this.props.pageNum
        };
        
    }


    

    render() {
        return (
            <span className="pageNumberContainer" >
                <button type="button" className="pageNumber" value={this.props.pageIndex} onClick={this.props.goToPage}>{this.props.pageNum}</button>
            </span>
        );
    }
}

export default PageNumber;
