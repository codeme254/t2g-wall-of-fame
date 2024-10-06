// Stylings/NavStyles.jsx
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and nav links */
  padding: 15px 30px; /* Adjust padding as needed */
  background-color: #000; /* Background color of the navbar */
  gap:32rem;
`;

export const NavList = styled.ul`
  list-style: none; /* Remove default list styling */
  display: flex; /* Display items in a row */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

export const NavItem = styled.li`
  margin: 0; /* Remove default margin */
`;

export const NavLink = styled.a`
  color: white; /* Text color */
  text-decoration: none; /* Remove underline */
  font-size: 18px; /* Font size for navigation links */
  transition: color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    color: #61dafb; /* Change color on hover */
  }
`;

// Optionally, you can style the icons here as well
export const SocialLink = styled.a`
  color: white; /* Icon color */
  font-size: 24px; /* Size of the icons */
  transition: color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    color: #61dafb; /* Change color on hover */
  }
`;
