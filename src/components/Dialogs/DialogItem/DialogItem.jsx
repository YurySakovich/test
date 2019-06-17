import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../App.css';
import s from  './DialogItem.module.css';

const DialogItem = (props) => {
  const messageUrl = `/dialogs/${props.id}`
  return (
    <div className={s.dialogItem}>
      <NavLink to={messageUrl}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
