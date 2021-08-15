import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { MdArrowForward, MdChevronRight } from "react-icons/md";

export const HeroContainer = styled.section`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;
export const HeroBg = styled.div`
  top: 0;
  left: 0;

  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #234a34;
`;

export const HeroContent = styled.div`
  z-index: 15;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroText = styled.p`
  color: #fff;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button<{
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
}>`
  border-radius: 50px;
  border: 0;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    text-decoration: none !important;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowBack = styled(MdChevronRight)`
  margin-left: 8px;
  font-size: 20px;
`;
