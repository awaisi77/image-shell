import React, { ReactElement } from "react";
import {
  Nav,
  NavbarLogo,
  NavbarContainer,
  MenuButton,
  NavItem,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./syled";
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { useScrollNav } from "../../hooks/useScrollNav";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
interface Props {
  onMenuClick: () => void;
}
export default function Navbar({ onMenuClick }: Props): ReactElement {
  const scrollNav = useScrollNav(180);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav className="mr-auto" scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to="/" onClick={() => scrollToTop()}>
            NFTs
          </NavbarLogo>
          <MenuButton onClick={() => onMenuClick()}>
            <FaBars />
          </MenuButton>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                // smooth={true}
                // duration={500}
                // spy={true}
                // offset={-80}
              >
                Marketplace
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                // smooth={true}
                // duration={500}
                // spy={true}
                // offset={-80}
              >
                Stats
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                // smooth={true}
                // duration={500}
                // spy={true}
                // offset={-80}
              >
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="signup">Sign up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}
