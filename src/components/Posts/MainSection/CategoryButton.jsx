import React, { Component } from 'react';



class CategoryButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={this.props.class}>
                <button 
                    className={this.props.buttonClass} 
                    type="button" 
                    value={this.props.category} 
                    onClick={this.props.onClickFunc} 
                >
                    {this.props.category}
                </button>

                
            </div>
        );
    }
}

export default CategoryButton;