import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Smilies from './Smilies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faTimes, faSmile, faMeh, faFrown)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Smilies />
      </div>
    );
  }
}

export default App;
