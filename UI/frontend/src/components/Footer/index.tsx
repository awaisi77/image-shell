import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkExt,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./styled";
import { animateScroll as scroll } from "react-scroll";

interface Props {}

const Footer = (props: Props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About us</FooterLinkTitle>
              <FooterLink to="/howitworks">How it works</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/investors">Investors</FooterLink>
              <FooterLink to="/termis">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact us</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
              <FooterLink to="/destinatiosn">Destinations</FooterLink>
              <FooterLink to="/sponsorship">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/howitworks">Submit video</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
              <FooterLink to="/ambassadors">Ambassadors</FooterLink>
              <FooterLink to="/agency">Agency</FooterLink>
              <FooterLink to="/influencer">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLinkExt href="https://www.instagram.com">
                Instagram
              </FooterLinkExt>
              <FooterLinkExt href="https://www.facebook.com">
                Facebook
              </FooterLinkExt>
              <FooterLinkExt href="https://www.youtube.com">
                Youtube
              </FooterLinkExt>
              <FooterLinkExt href="https://www.twitter.com">
                Twitter
              </FooterLinkExt>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={() => scrollToTop()}>
              NFT
            </SocialLogo>
            <WebsiteRights>
              NFT &copy; {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                aria-label="Youtube"
                target="_blank"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                aria-label="Twitter"
                target="_blank"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                aria-label="Linkedin"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
