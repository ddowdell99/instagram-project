import React, { Component } from 'react'
import FollowingFollowersSide from './FollowingFollowersSide'
import Nav from './Nav'
import Post from './Post'

export default class App extends Component {
  render = () => {
    return (
      <div>
        <Nav />
        <div className='posts-followers-container'>
            <Post />
            <FollowingFollowersSide />
        </div>
      </div>



    )
  }
}

