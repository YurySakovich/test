import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

// let posts = [
//   {id: '1', message: 'long message post and second', likeCount: '2'},
//   {id: '2', message: 'long over long message', likeCount: '32'},
//   {id: '3', message: 'lorem  lorem lorem', likeCount: '3'},
//   {id: '4', message: 'first lorem and lorem', likeCount: '1'},
// ];

// let dialogs = [
//   {id:1, name: 'Iozua'},
//   {id:2, name: 'Rikky'},
//   {id:3, name: 'Nua'}
// ];

// let messages = [
//   {id:1, name: 'asdf asdf asdf asdf '},
//   {id:2, name: 'Ri1234r 1234  1234kky'},
//   {id:3, name: 'Nu 23 23 23rasd 23a'}
// ];

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
