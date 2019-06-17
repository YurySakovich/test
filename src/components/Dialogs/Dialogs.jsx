import React from 'react';

import Messages from '../Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

import './../../App.css';
import s from  './Dialogs.module.css';

const Dialogs = (props) => {
  let DialogsData = [
    {id:1, name: 'Iozua'},
    {id:2, name: 'Rikky'},
    {id:3, name: 'Nua'}
  ];
  
  let messagesData = [
    {id:1, name: 'asdf asdf asdf asdf '},
    {id:2, name: 'Ri1234r 1234  1234kky'},
    {id:3, name: 'Nu 23 23 23rasd 23a'}
  ];

  let dialogsElements = DialogsData.map((dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  }));

  let messagesElements = messagesData.map((message => {
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
