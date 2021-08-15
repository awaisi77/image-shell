import React, { ReactElement } from "react";
import { Button } from "../HeroSection/styled";
import {
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  ImgageWrap,
  Image,
  InfoContainer,
} from "./styled";

interface InfoProps {
  id: string;
  lightBg: boolean;
  imgStart: boolean;
  topLine: string;
  lightText: boolean;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
  primary: boolean;
  dark: boolean;
  dark2: boolean;
}

export default function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}: InfoProps): ReactElement {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}> {headline}</Heading>
              <Subtitle lightText={lightText}>{description}</Subtitle>
              <BtnWrapper>
                <Button
                  // to="home"
                  primary={primary}
                  dark={dark}
                  // smooth={true}
                  // duration={500}
                  // spy={true}
                  // offset={-80}
                >
                  {buttonLabel}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgageWrap>
              <Image src={img} alt={alt} />
            </ImgageWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
