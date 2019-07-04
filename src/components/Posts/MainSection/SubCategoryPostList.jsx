import React, { Component } from 'react';

import PostTitle from './PostTitle'

class SubCategoryPostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayedPosts: this.props.postsData
        };


    }



    // renderPagination = () => {
    //     let remainder;
    //     if(this.state.displayedPosts <= 6)
    //         this.state.numberOfPages
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


    render() {
        
        console.log(this.props.match.params.id);

        return (
            <div className="postsList">
                {this.state.displayedPosts.filter(i => i.category === this.props.match.params.id).map(i => 
                    <PostTitle 
                        imgSrc = {i.displayImg}
                        date = {i.postdate}
                        postTitle = {i.title}
                        postBrief = {i.content}
                    />
                )}

                {/* {this.renderPagination()} */}
                    
            </div>
            
        );
    }
}

export default SubCategoryPostList;