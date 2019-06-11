import React from 'react';

import MyPosts from './MyPosts/MyPosts';

import './../../App.css';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className="app-main-content">
      <div >
        img
        </div>
      <div>
        avadesc
        </div>
      <div>
        <MyPosts/>
      </div>
    </main>
  );
}

export default Profile;
