import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';

import HomePage from '../HomePage/HomePage';
import Posts from '../Posts/Posts';
import Pics from '../Pics/Pics';
import Vlog from '../Vlog/Vlog'
import Header from './Header'
import Footer from './Footer'


class HeaderFooter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            postsData : [],
        };

    }

    componentDidMount = () => {

        console.log(this.state.postsData);

        const dataUrl = "https://gist.githubusercontent.com/caduong97/e31c75a9851c5f29ed92ed8ac3b2d54c/raw/ed4cd8a14fe5bc0add5880e3a91339d55c292962/postdata.json";

        axios.get(dataUrl)
            .catch(error => console.log("BAD", error))
            .then(res => {
                const data = res.data.postdata.map(obj => obj);
                console.log(data);
                this.setState({ 
                    postsData: data,
                    isLoading: false
                });
            });


    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    render() {
        if(this.state.isLoading) {
            return (
                <div>Loading</div>
            );
        }
        else {
            return (
                <Router>
                    <div>
                        {/* <Navbar bg="dark" variant="dark" >
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#post">Post</Nav.Link>
                                <Nav.Link href="#pic">Pic</Nav.Link>
                                <Nav.Link href="#connect">Connect</Nav.Link>
                            </Nav>
                        </Navbar> */}

                        {/* header */}
                        <Header />
                        
                        {/* routing */}
                        <Switch>
                            <Route exact path='/' render = { (props) => <HomePage {...props} postsData={this.state.postsData}   scrollToTop={this.scrollToTop} /> } /> 
                                                            {/* passing posts data to use in homepage component */}
                            {/* <Route path="/posts" render={() => <Redirect to="posts/all" />} /> */}
                            <Route path='/posts/all' render = { (props) => <Posts {...props} postsData={this.state.postsData}/> } /> 
                        
                            <Route path='/pics' component={Pics} />
                            <Route path='/vlog' component={Vlog} />
                            {/* <Route  component={NotFound} />  */}
                        </Switch>

                        {/* footer */}
                        <Footer />


                    </div>
                </Router>
            );
        }   
    }
}

export default HeaderFooter;