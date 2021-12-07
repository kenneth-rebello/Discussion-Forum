import React from 'react';
import {NavLink} from 'react-router-dom';

import {ReactComponent as GlobeIcon} from '../../assets/Globe.svg';
import './SideBar.styles.scss';

const SideBar = () => (
  <div className='side-bar-container'>
    <div className='side-bar-tabs'>
      <NavLink
        exact
        activeClassName='active'
        className='home-link nav_link'
        to='/'
      >
        <p>Home</p>
      </NavLink>

      <div className='public-tabs'>
        
        <NavLink
          activeClassName='active'
          className='icon-link nav_link'
          to='/questions'
        >
          <p>
            <GlobeIcon className='icon' />
            Qollab
          </p>
        </NavLink>
        <NavLink activeClassName='active' className='link nav_link' to='/tags'>
          <p>Tags</p>
        </NavLink>
        <NavLink activeClassName='active' className='link nav_link' to='/users'>
          <p>Users</p>
        </NavLink>
      </div>
    </div>
  </div>
);

export default SideBar;
