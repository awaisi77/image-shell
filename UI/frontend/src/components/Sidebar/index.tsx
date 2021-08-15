import React, { ReactElement } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  NavItem,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarBtn,
  SidebarRoute,
} from './styled';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: Props): ReactElement {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={() => onClose()}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <NavItem>
            <SidebarLink to="about">About</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="discover">Discover</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="services">Services</SidebarLink>
          </NavItem>
          <NavItem>
            <SidebarLink to="signup">Services</SidebarLink>
          </NavItem>
        </SidebarMenu>
        <SidebarBtn>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
