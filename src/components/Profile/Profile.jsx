import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import './../../App.css';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className="app-main-content">
      <ProfileInfo/>
      <MyPosts/>
    </main>
  );
}

export default Profile;
