import React, { ReactElement } from "react";
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesSubtitle,
  ServucesText,
} from "./styled";
import icon1 from "../../assets/images/wallet.svg";
import icon2 from "../../assets/images/collection.svg";
import icon3 from "../../assets/images/nft.svg";
import icon4 from "../../assets/images/sale.svg";

export default function ServicesSection(): ReactElement {
  return (
    <ServicesContainer id="services">
      <ServicesTitle>Create and sell your NFTs</ServicesTitle>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1}></ServicesIcon>
          <ServicesSubtitle>Set up your wallet</ServicesSubtitle>
          <ServucesText>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about the
            wallets we support.
          </ServucesText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2}></ServicesIcon>
          <ServicesSubtitle>Create your collection</ServicesSubtitle>
          <ServucesText>
            Click Create and set up your collection. Add social links, a
            description, profile & banner images, and set a secondary sales fee.
          </ServucesText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3}></ServicesIcon>
          <ServicesSubtitle>Add your NFTs</ServicesSubtitle>
          <ServucesText>
            Upload your work (image, video, audio, or 3D art), add a title and
            description, and customize your NFTs with properties, stats, and
            unlockable content.
          </ServucesText>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon4}></ServicesIcon>
          <ServicesSubtitle>List them for sale</ServicesSubtitle>
          <ServucesText>
            Choose between auctions, fixed-price listings, and declining-price
            listings. You choose how you want to sell your NFTs, and we help you
            sell them!{" "}
          </ServucesText>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
