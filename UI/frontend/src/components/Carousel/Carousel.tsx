import React, { Component } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import CardComponent from "../Card/CardComponent";

export default class CarouselComponet extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <Carousel interval={3000}>
          <Carousel.Item>
            <div>
              <div className="d-inline-block">
                <CardComponent
                  titleSmall="mycrypto"
                  title="NFTArtFinance"
                  price="0.002"
                  imgUrl="https://picsum.photos/286/180"
                ></CardComponent>
              </div>
              <div className="d-inline-block">
                <CardComponent
                  titleSmall="mycrypto"
                  title="NFTArtFinance"
                  price="0.002"
                  imgUrl="https://picsum.photos/286/180"
                ></CardComponent>
              </div>
              <div className="d-inline-block">
                <CardComponent
                  titleSmall="mycrypto"
                  title="NFTArtFinance"
                  price="0.002"
                  imgUrl="https://picsum.photos/286/180"
                ></CardComponent>
              </div>
            </div>

            {/* <img
              className="d-block"
              src="https://picsum.photos/1000/300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://picsum.photos/1000/300"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://picsum.photos/1000/300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
