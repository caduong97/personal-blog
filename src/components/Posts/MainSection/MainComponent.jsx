import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink  

} from 'react-router-dom';

import CategoryButton from './CategoryButton'
import SearchBar from './SearchBar'
// import PostTitle from './PostTitle';
// import PageNumber from './Pagination/PageNumber'
// import PrevButton from './Pagination/PrevButton'
// import NextButton from './Pagination/NextButton'
import PostList from './PostList'
import SubCategoryPostList from './SubCategoryPostList'

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayedPosts: this.props.postsData,
            // currentPage: null,
            // numberOfPages: 0,
            // displayedPostsPerPage: this.props.postsData.slice(6*0, 6*0+6),
            renderSubCategory: false,
            // subCategoryToRender: ""
        };

        this.setCategory = this.setCategory.bind(this);
        this.setCategoryToAll = this.setCategoryToAll.bind(this);
        // this.goToPage = this.goToPage.bind(this);
        // this.renderPagination = this.renderPagination.bind(this);
        this.renderSubNavBar = this.renderSubNavBar.bind(this);

        
        // let currentPage = 0;
    }
   


    componentDidMount = () => {
        window.scrollTo(0,0);
        

    }


    setCategory = () => {
        this.setState({
            renderSubCategory: true,
        })
        
    }

    setCategoryToAll = () => {
        this.setState({
            renderSubCategory: false,
        })
    }


    // goToPage = (e) => {
    //     // e.preventDefault();
    //     let i = e.target.value;
    //     this.setState({
    //         displayedPostsPerPage : this.state.displayedPosts.slice(6*i, 6*i + 6 )
    //     });
    //     this.currentPage = i;
    //     window.scrollTo(0, 600)
    //     console.log("current page is " + this.state.currentPage);
    // }
    

    // renderPagination = () => {
    //     let remainder;
    //     if(this.state.displayedPosts.length % 6 === 0)
    //         this.state.numberOfPages = this.state.displayedPosts.length / 6;
    //     else {
    //         remainder =  this.state.displayedPosts.length % 6;
    //         this.state.numberOfPages = (this.state.displayedPosts.length - remainder) / 6 + 1;
    //     }

    //     let pagination = [];
    //     for(let i = 0; i < this.state.numberOfPages; i++ ) {
    //         pagination.push(<PageNumber pageNum={i+1} pageIndex={i} goToPage={this.goToPage}/> );
    //     }
    //     console.log("number of page is " + this.state.numberOfPages)
        
        
    //     return (
    //         <div>
    //             <PrevButton />
    //             {pagination}
    //             <NextButton />
                
    //         </div>
    //     );

    // }

    renderSubNavBar = (displayProp) => {
        return (
            <div className="row" style={{width: "70vw", position: "relative", left: "15vw", bottom: "5%"}}>
                <div className="col-lg-8 row">
                    <NavLink to="/posts/culture" className="col-lg-2" ><CategoryButton  buttonClass = "categoryButton" category="culture" onClickFunc={this.setCategory} /></NavLink>
                    <NavLink to="/posts/food" className="col-lg-2" ><CategoryButton  buttonClass = "categoryButton" category="food" onClickFunc={this.setCategory}/></NavLink>
                    <NavLink to="/posts/art" className="col-lg-2" ><CategoryButton  buttonClass = "categoryButton" category="art" onClickFunc={this.setCategory}/></NavLink>
                    <NavLink to="/posts/music" className="col-lg-2" ><CategoryButton  buttonClass = "categoryButton" category="music" onClickFunc={this.setCategory}/></NavLink>
                    <NavLink to="/posts/all" className="col-lg-2" ><div  style={{display: displayProp}}><CategoryButton buttonClass = "categoryButton " category="all" onClickFunc={this.setCategoryToAll} /></div></NavLink>
                    {/* <div classNam="col-lg-2"></div> */}
                </div>

                
                
                <div className="col-lg-4">
                    <SearchBar />
                </div>
            </div>
        );
    }

    // research more about its necesity
    // componentWillUnmount = () => {
    //     this.setState({ 
    //         displayedPosts: this.props.postsData
    //     });
    // }
    

    render() {
        if (this.state.renderSubCategory === true) {
            return(
                <Router>
                    <div>

                        {this.renderSubNavBar("block")}

                        <Switch>
                            <Route path="/posts/:id" render={ (props) => <SubCategoryPostList  {...props} postsData={this.state.displayedPosts}  />} />
                        </Switch>
                       

                    </div>
                </Router>
            );
        }
        else {
            return (
                <Router>
                    <div>

                        {this.renderSubNavBar("none")}
                        
                        {/* <div className="postsList">
                            {this.state.displayedPostsPerPage.map(i => 
                                <PostTitle 
                                    imgSrc = {i.displayImg}
                                    date = {i.postdate}
                                    postTitle = {i.title}
                                    postBrief = {i.content}
                                />
                            )}
        
                            
                            
                        </div>
                        
        
                        {this.renderPagination()} */}
                        <Switch>
                            <Route path="/posts/:id" render={ (props) => <PostList  {...props} postsData={this.state.displayedPosts}  />} />
                        </Switch>

                        {/* <PostList postsData={this.props.postsData} /> */}

        
                    </div>
                </Router>
            );
        }
        
    }
}

export default MainComponent;