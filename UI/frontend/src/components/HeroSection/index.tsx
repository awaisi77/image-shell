import React, { ReactElement, useState } from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroText,
  HeroTitle,
  ArrowForward,
  ArrowBack,
  Button,
} from "./styled";
interface Props {}

export default function HeroSection(): ReactElement {
  const [hover, setHover] = useState(false);
  return (
    <>
      <HeroContainer id="home">
        Helo
        <HeroBg>
          <VideoBg autoPlay loop muted src={"/assets/videos/videobg.mp4"} />
        </HeroBg>
        <HeroContent>
          <HeroTitle>Discover, collect, and sell extraordinary NFTs</HeroTitle>
          <HeroText>on the world's first & largest NFT marketplace</HeroText>
          <HeroBtnWrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div>
              <div style={{ display: "inline-block", marginRight: "30px" }}>
                {" "}
                <Link to="/assets">
                  {" "}
                  <Button primary={true} dark={true}>
                    Explore
                    {/* {hover ? <ArrowForward /> : <ArrowBack />} */}
                  </Button>
                </Link>
              </div>
              <div style={{ display: "inline-block" }}>
                {" "}
                <Link to="/collections">
                  {" "}
                  <Button
                    className="hover-white"
                    style={{ color: "black", background: "white" }}
                  >
                    Create
                    {/* {hover ? <ArrowForward /> : <ArrowBack />} */}
                  </Button>
                </Link>
              </div>
            </div>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}
