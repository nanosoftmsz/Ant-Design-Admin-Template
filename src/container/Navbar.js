import React, { useContext } from 'react';
import { Drawer } from 'antd';

import { AppRootContext } from '../contexts/AppRootContext';

import '../styles/Navbar.less';
import MenuTopics from './MenuTopics';

const Navbar = () => {
  const { navIsVisible, setNavIsVisible } = useContext(AppRootContext);

  return (
    <nav className='navbar'>
      <Drawer title='E-Commerce' placement='left' onClose={() => setNavIsVisible(false)} visible={navIsVisible}>
        <MenuTopics />
      </Drawer>
    </nav>
  );
};

export default Navbar;
