import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/NASA.jpg';
import styled from 'styled-components';
const NLogo= styled.img`
max-width: 200px;
max-height: 70px;
`

const NewNav = styled(Navbar)`
padding: 0rem 1rem;
`
const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <NewNav light>
          <NavbarBrand href="https://www.nasa.gov/" className="mr-auto"><NLogo src={Logo} alt='NASA logo'/>NASA Photo Of The Day</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://api.nasa.gov/">NASA APIs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/benjberg">My Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NewNav>
      </div>
    );
  }

export default Header;








