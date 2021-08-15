import styled from "styled-components/macro";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav<{ scrollNav?: boolean }>`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  color: white !important;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: all 0.8 ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  height: 80px;
  z-index: 1;
  max-width: 1100px;
`;

export const NavbarLogo = styled(LinkRouter)`
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff !important;
  justify-self: flex-start;
  margin-left: 1.5rem;
  font-weight: bold;
  text-decoration: none !important;
`;

export const MenuButton = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    right: 1rem;
    transform: translate(-100%, 60);
    cursor: pointer;
    font-size: 1.8rem;
    background: none;
    border: 0;
    color: #fff !important;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  height: 80px;
  &:hover {
    font-weight: bolder !important;
    text-decoration: none !important;
    color: white !important;
  }
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none !important;
  &.active {
    border-bottom: 3px solid #01bf71 !important;
  }
`;

export const NavBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  background-color: #01bf71 !important;
  border-radius: 50px;
  padding: 10px 22px;
  border: 0;
  white-space: nowrap;
  color: #010606 !important;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;
  &:hover {
    background-color: #fff !important;
    color: #010606 !important;
  }
`;
