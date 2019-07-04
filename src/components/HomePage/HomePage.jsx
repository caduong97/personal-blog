import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PhotoSection from './PhotoSection'
import PostSection from './PostSection'
import TopScreen from './TopScreen'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirectTo: "",
            
        };
        this.setRedirect = this.setRedirect.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
        
    }

    setRedirect = (event) => {
        this.setState({
            redirect: true,
            redirectTo: event.target.value
        });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            if(this.state.redirectTo != null)
                return <Redirect to={this.state.redirectTo} />
        } 
    }


    render() {
        
        return (
            <div>
                <TopScreen />
                <PhotoSection 
                    setRedirect = {this.setRedirect}
                    renderRedirect = {this.renderRedirect}
                    // displayQuote = {this.state.displayQuote}
                />
                <PostSection 
                    posts = {this.props.postsData}
                    setRedirect = {this.setRedirect}
                    renderRedirect = {this.renderRedirect}
                    // randomPostGenerated = {this.props.randomPostGenerated}
                />
                {this.renderRedirect()}
            </div>
        );
    }
}

export default HomePage;