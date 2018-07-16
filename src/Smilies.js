import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Smilies extends Component {
  render() {
    return (
      <div className='smilies'>
        <div className='text'>How are you feeling today?</div>
        <div className='row'>
          <FontAwesomeIcon icon="smile" className='icon happy'/>
        <FontAwesomeIcon icon="meh" className='icon okay'/>
      <FontAwesomeIcon icon="frown" className='icon sad'/>

        </div>
      </div>

    );
  }
}

export default Smilies
