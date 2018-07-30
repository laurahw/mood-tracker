import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Smilies from './Smilies'
import YesNo from './YesNo'
import Submit from './Submit'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faSmile, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faTimes, faSmile, faMeh, faFrown)

class App extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.setSmiley = this.setSmiley.bind(this)
    this.state = {
      drinking: false,
      exercised: false,
      tired: false,
      hungry: false,
      smiley: ''
    }
  }

  handleChange(event) {

    if(event === 'drinking'){
      this.setState(
        {
          drinking: !this.state.drinking
        }
      )
    }
    if(event === 'exercise'){
      this.setState(
        {
          exercised: !this.state.exercised
        }
      )
    }

    if(event === 'tired'){
      this.setState(
        {
          tired: !this.state.tired
        }
      )
    }

    if(event === 'hungry'){
      this.setState(
        {
          hungry: !this.state.hungry
        }
      )
    }
  }

  setSmiley(num){
    this.setState({
      smiley: num
    }
    )

  }
  render() {
    console.log(this.state.hungry);
    return (
      <div className="App">
        <Header />
        <Smilies
          setSmiley={this.setSmiley}
          />
        <YesNo
          handleChange={this.handleChange} />
        <Submit />

      </div>
    );
  }
}

export default App;
