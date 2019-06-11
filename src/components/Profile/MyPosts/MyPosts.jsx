import React from 'react';

import Post from './Post/Post';

import './../../../App.css';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={s.postList}>
      <Post/>
    </div>
  );
}

export default MyPosts;
