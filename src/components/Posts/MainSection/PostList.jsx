import React, { Component } from 'react';

import PostTitle from './PostTitle';
import PageNumber from './Pagination/PageNumber'
import PrevButton from './Pagination/PrevButton'
import NextButton from './Pagination/NextButton'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayedPosts: this.props.postsData,
            numberOfPages: 0,
            currentPage: 0,
            displayedPostsPerPage: this.props.postsData.slice(6*0, 6*0+6),
        };
        console.log("current page is " + this.state.currentPage);

        this.goToPage = this.goToPage.bind(this)
    }
    
    // componentDidUpdate = () => {

    // }

    goToPage = (e) => {
        // e.preventDefault();
        let i = e.target.value;
        this.setState({
            displayedPostsPerPage : this.state.displayedPosts.slice(6*i, 6*i + 6 )
        });
        // this.currentPage = i; 
        window.scrollTo(0, 600)
        console.log("current page is " + this.state.currentPage);
    }

    renderPagination = () => {
        let remainder;
        if(this.state.displayedPosts.length % 6 === 0)
            this.state.numberOfPages = this.state.displayedPosts.length / 6;
        else {
            remainder =  this.state.displayedPosts.length % 6;
            this.state.numberOfPages = (this.state.displayedPosts.length - remainder) / 6 + 1;
        }

        let pagination = [];
        for(let i = 0; i < this.state.numberOfPages; i++ ) {
            pagination.push(<PageNumber pageNum={i+1} pageIndex={i} goToPage={this.goToPage}/> );
        }
        console.log("number of page is " + this.state.numberOfPages)
        
        
        return (
            <div>
                <PrevButton />
                {pagination}
                <NextButton />
                
            </div>
        );

    }

    render() {
        return (
            <div className="postsList">
                {this.state.displayedPostsPerPage.map(i => 
                    <PostTitle 
                        imgSrc = {i.displayImg}
                        date = {i.postdate}
                        postTitle = {i.title}
                        postBrief = {i.content}
                    />
                )}

                {this.renderPagination()}
                
            </div>
        );
    }
}

export default PostList;