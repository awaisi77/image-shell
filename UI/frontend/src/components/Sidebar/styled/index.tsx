import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components/macro';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: #0d0d0d;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: grid;
  align-items: center;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #01bf71;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background-color: #01bf71;
  padding: 16px 64px;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #010606;
  }
`;
