import React from 'react';

import Messages from '../Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

import './../../App.css';
import s from  './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  }));

  let messagesElements = props.state.messages.map((message => {
    return <Messages name={message.message} id={message.id}/>
  }));

  return (
    <div className={s.dialogsPageWrapper}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messagesWrapper}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;
