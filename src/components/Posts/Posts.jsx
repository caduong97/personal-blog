import React, { Component } from 'react';
// import {Route, Redirect} from 'react-router-dom'

// import CategoryButton from './MainSection/CategoryButton'
// import SearchBar from './MainSection/SearchBar'
// import PostTitle from './MainSection/PostTitle';
// import PageNumber from './MainSection/Pagination/PageNumber'
// import PrevButton from './MainSection/Pagination/PrevButton'
// import NextButton from './MainSection/Pagination/NextButton'
import MainComponent from './MainSection/MainComponent'


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // displayedPosts: this.props.postsData,
            // // currentPage: null,
            // numberOfPages: 0,
            // displayedPostsPerPage: this.props.postsData.slice(6*0, 6*0+6)
        };

        // this.setCategory = this.setCategory.bind(this);
        // this.goToPage = this.goToPage.bind(this);
        // this.renderPagination = this.renderPagination.bind(this);
        // // this.setCurrentPage = this.setCurrentPage.bind(this);

        // console.log("current page is " + (this.state.currentPage));
        // let currentPage = 0;
    }
   


    // componentDidMount = () => {
    //     // window.scrollTo({
    //     //     top: 0,
    //     //     behavior: 'smooth'
    //     // })
    //     window.scrollTo(0,0);
        
    // }


    // setCategory = (e) => {
    //     this.setState({
    //         displayedPosts: this.props.postsData.filter(i => i.category === e.target.value)
    //     })
    //     console.log(e.target.value)
    // }


    // goToPage = (e) => {
    //     e.preventDefault();
    //     let i = e.target.value;
    //     this.setState({
    //         displayedPostsPerPage : this.state.displayedPosts.slice(6*i, 6*i + 6 )
    //     });
    //     this.currentPage = i;
    //     window.scrollTo(0, 600)
    //     console.log("current page is " + this.state.currentPage);
    // }
    

    // renderPagination = () => {
    //     // let numberOfPages;
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


    

    // setCurrentPage = (i) => {
    //     this.setState({
    //         currentPage: i
    //     });
    //     console.log(this.state.currentPage);
    // }

    // renderCurrentPage = () => {
    //     this.setState({
    //         displayedPostsPerPage : this.state.displayedPosts.slice(6*this.state, 6*i + 6 )
    //     })
    // }




    


    // research more about its necesity
    // componentWillUnmount = () => {
    //     this.setState({ 
    //         displayedPosts: this.props.postsData
    //     });
    // }
    

    render() {
        return (
            <div className="postsContainer">
                <div className="parallax"></div>
                
                {/* <div className="row" style={{width: "70vw", position: "relative", left: "15vw", bottom: "5%"}}>
                    <div className="col-lg-7 row">
                        <CategoryButton class="col-lg-3" buttonClass = "categoryButton" category="culture" onClickFunc = {this.setCategory}/>
                        <CategoryButton class="col-lg-3" buttonClass = "categoryButton" category="food" onClickFunc = {this.setCategory}/>
                        <CategoryButton class="col-lg-3" buttonClass = "categoryButton" category="art" onClickFunc = {this.setCategory}/>
                        <CategoryButton class="col-lg-3" buttonClass = "categoryButton" category="music" onClickFunc = {this.setCategory}/>
                    </div>
                    
                    <div className="col-lg-5">
                        <SearchBar />
                    </div>
                </div>
                
                <div className="postsList">
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
                
                <MainComponent 
                    postsData = {this.props.postsData}
                />

                

            </div>
        );
    }
}

export default Posts;