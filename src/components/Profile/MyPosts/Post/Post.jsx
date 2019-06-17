import React from 'react';

import './../../../../App.css';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.postWrapper}>
      <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt=""/>
      <div className={s.post}>
        {props.message}
      </div>
      <span className={s.likeCount}>like {props.likeCount}</span>  
    </div>
  );
}

export default Post;
