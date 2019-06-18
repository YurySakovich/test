import React from 'react';

import Post from './Post/Post';

import './../../../App.css';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postElement = props.posts.map((post) => <Post message={post.message} likeCount={post.likeCount}/>)
  
  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.postList}>
        {postElement}
      </div>
    </div>
  );
}

export default MyPosts;
