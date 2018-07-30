import React, { Component } from 'react';
import Toggle from 'react-toggle'


class YesNo extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      hungry: false,
      tired: false,
      exercised: false,
      drinking: false
    }
  }


  handleClick(value){
    console.log('test')
    console.log(this.props)
    this.props.handleChange(value)
  }

  render() {
    return (
      <div className="yes-no">

          <div className="question">
            <span>Have you been drinking in the last 24 hours?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.props.drinking}
                onChange={() => this.handleClick('drinking')}/>
            </div>
          </div>

          <div className="question">
            <span>Have you exercised in the last 24 hours?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.props.exercised}
                onChange={() => this.handleClick('exercise')}/>
            </div>
          </div>

          <div className="question">
            <span>Are you tired?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.props.tired}
                onChange={() => this.handleClick('tired')}/>
            </div>
          </div>

          <div className="question">
            <span>Are you hungry?</span>
            <div className="toggle">
              <Toggle
                defaultChecked={this.props.hungry}
                onChange={() => this.handleClick('hungry')}/>
            </div>
          </div>




      </div>
    );
  }
}

export default YesNo;
