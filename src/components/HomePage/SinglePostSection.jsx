import React, { Component } from 'react';

class SinglePostSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={this.props.contClass}>

                <figure className={this.props.figClass}>
                    <img className="gridImg"  src={this.props.imgSrc} alt="child face" />
                </figure>
                <div className={this.props.divClass}>{this.props.divCont}...</div>
                <hr className={this.props.hrClass}></hr>
            </div>
        ); 
    }
}
 
 export default SinglePostSection;