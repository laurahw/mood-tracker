import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => (
  <div className='header'>
    <div className='title'>
      Title
    </div>
    <div className='hamburger-menu'>
      <div className='standard'>
        <FontAwesomeIcon icon="bars" />
      </div>


    </div>

  </div>
);

export default Header;
