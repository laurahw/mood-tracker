import React, { Component } from 'react';
import Toggle from 'react-toggle'


class YesNo extends Component {
  constructor(){
    super()
    this.state = {
      drinking: false,
      exercised: false ,
      tired: false,
      hungry: false
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
  render() {
    return (
      <div className="yes-no">

          <div className="question">
            <span>Have you been drinking in the last 24 hours?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.state.drinking}
                onChange={() => this.handleChange('drinking')}/>
            </div>
          </div>

          <div className="question">
            <span>Have you exercised in the last 24 hours?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.state.exercised}
                onChange={() => this.handleChange('exercise')}/>
            </div>
          </div>

          <div className="question">
            <span>Are you tired?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.state.tired}
                onChange={() => this.handleChange('tired')}/>
            </div>
          </div>

          <div className="question">
            <span>Are you hungry?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.state.hungry}
                onChange={() => this.handleChange('hungry')}/>
            </div>
          </div>




      </div>
    );
  }
}

export default YesNo;
