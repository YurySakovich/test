import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import './../../App.css';
import s from './Profile.module.css';

const Profile = (props) => {

  return (
    <main className="app-main-content">
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </main>
  );
}

export default Profile;
