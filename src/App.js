import React from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';

/*components*/
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <main class="mainContentWrapper">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
