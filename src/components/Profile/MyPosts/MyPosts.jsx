import React from 'react';

import Post from './Post/Post';

import './../../../App.css';
import s from './MyPosts.module.css';

const MyPosts = () => {
  let posts = [
    {id: '1', message: 'long message post and second', likeCount: '2'},
    {id: '2', message: 'long over long message', likeCount: '32'},
    {id: '3', message: 'lorem  lorem lorem', likeCount: '3'},
    {id: '4', message: 'first lorem and lorem', likeCount: '1'},
  ];

  let postElement = posts.map((post) => <Post message={post.message} likeCount={post.likeCount}/>)
  
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
