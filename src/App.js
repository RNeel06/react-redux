import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postforms from './components/Postforms';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <Postforms />
        <br />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
