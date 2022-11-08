import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="card postCard">
                <h5 className="profile-handle"><img src=""/>@InstaHandle</h5>
                <img src="https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg"/>
                <div className="card-body main-post">
                <div className='like-comment'>
                    <a className="likeButton" href="#"><i class="fa-regular fa-heart"></i>&nbsp;&nbsp;Like</a>
                    <a className="commentButton" href="#"><i class="fa-regular fa-comment"></i>&nbsp;&nbsp;Comment</a>
                </div>
                    <h5><span className="handle-name">@InstaHandle</span> <span className="caption">Caption Goes Here</span></h5>

                </div>
                <div className="card-body">
                    <div>
                        <p className='comment-header'>Comments</p>
                        <div className='comments'>
                            <span className='profile-name'>Diante</span> WOW! So Cool
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
