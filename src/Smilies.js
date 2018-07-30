import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import descriptions from './data/desc.json'


class Smilies extends Component {


  constructor(props){
    super()

    this.state = {
      descriptionText: "What kind of mood are you in?",
      activeFace: ''
    }
  }



  clickHandler(num){
      this.setState({descriptionText:  descriptions[num].description, activeFace: num})
      this.props.setSmiley(num)
  }

  render() {
    return (
      <div className='smilies'>
        <div className='text'>How are you feeling today?</div>
        <div className='row'>
          <FontAwesomeIcon icon="smile" className={'icon happy' + this.state.activeFace} onClick={() => this.clickHandler(0)}/>
        <FontAwesomeIcon icon="meh" className={'icon okay' + this.state.activeFace} onClick={() => this.clickHandler(1)}/>
      <FontAwesomeIcon icon="frown" className={'icon sad' + this.state.activeFace} onClick={() => this.clickHandler(2)}/>
        </div>
        <div className="description">
          {this.state.descriptionText}
        </div>
      </div>
    );
  }
}

export default Smilies
