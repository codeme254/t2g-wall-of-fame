
import React from 'react';
import { Navbar, NavList, NavItem, NavLink } from './Stylings/NavStyles';


import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar>
      <h1 style={{ color: 'white', marginRight: '40px' }}>My Portfolio</h1> {/* Gap between logo and nav links */}
      
      <NavList style={{ marginRight: 'auto', display: 'flex', gap: '30px' }}> {/* Gap between nav links */}
        <NavItem><NavLink href="#Hero">Home</NavLink></NavItem>
        <NavItem><NavLink href="#About">About</NavLink></NavItem>
        <NavItem><NavLink href="#Technologies">Technologies</NavLink></NavItem>
        <NavItem><NavLink href="#Projects">Projects</NavLink></NavItem>
        <NavItem><NavLink href="#Contact">Contact</NavLink></NavItem>
      </NavList>

      {/* Social Media Icons */}
      <NavList style={{ display: 'flex', gap: '20px' }}> {/* Gap between social icons */}
        <NavItem>
          <NavLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ color: 'white' }} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} style={{ color: 'white' }} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} style={{ color: 'white' }} />
          </NavLink>
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Navigation;
