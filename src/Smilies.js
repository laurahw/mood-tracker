import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import descriptions from './data/desc.json'


class Smilies extends Component {

  constructor(props){
    super()

    this.state = {
      descriptionText: "What kind of mood are you in?"
    }
  }



  clickHandler(mood){
      this.setState({descriptionText:  descriptions[mood].description})
  }

  render() {
    return (
      <div className='smilies'>
        <div className='text'>How are you feeling today?</div>
        <div className='row'>
          <FontAwesomeIcon icon="smile" className='icon happy' onClick={() => this.clickHandler(0)}/>
        <FontAwesomeIcon icon="meh" className='icon okay' onClick={() => this.clickHandler(1)}/>
      <FontAwesomeIcon icon="frown" className='icon sad' onClick={() => this.clickHandler(2)}/>
        </div>
        <div className="description">
          {this.state.descriptionText}
        </div>
      </div>
    );
  }
}

export default Smilies
