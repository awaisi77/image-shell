import React, { ReactElement, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  HeroSection,
  Navbar,
  Sidebar,
  InfoSection,
  ServicesSection,
  Footer,
} from "../components";
import CardComponent from "../components/Card/CardComponent";
import HomePageCard from "../components/Card/HomePageCard";
import CarouselComponet from "../components/Carousel/Carousel";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import NavBarCustom from "../components/NavbarCustom/NavBarComponent";
interface Props {}

export default function HomePage(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle = () => {
    setIsSidebarOpen((isOpen: boolean) => !isOpen);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <>
      {/* <NavBarCustom /> */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => toggle()} />

      <HeroSection />
      {/* <CarouselComponet></CarouselComponet>
       */}
      <h3 className="m-4" style={{ textAlign: "center" }}>
        Exclusive OpenSea drops
      </h3>
      <Carousel responsive={responsive} partialVisbile>
        {images.slice(0, 5).map((image) => {
          return <HomePageCard style={{ padding: 10 }}></HomePageCard>;
        })}
      </Carousel>
      <h3 className="m-4" style={{ textAlign: "center" }}>
        Trending collections
      </h3>
      <Carousel responsive={responsive} partialVisbile>
        {images.slice(0, 5).map((image) => {
          return (
            <CardComponent
              titleSmall="mycrypto"
              title="NFTArtFinance"
              price="0.002"
              imgUrl="https://picsum.photos/286/180"
            ></CardComponent>
          );
        })}
      </Carousel>
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} /> */}
      <ServicesSection />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}
