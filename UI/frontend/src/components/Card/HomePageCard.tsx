import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
export class HomePageCard extends Component<any, any> {
  render() {
    return (
      <Card className="custom-card" style={{ width: "" }}>
        <div
          style={{
            textAlign: "center",
            display: "table",
            //   minHeight: "180px",
            //   maxHeight: "180px",
            //   maxWidth: "286px",
          }}
        >
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <img
              className="card-img-bottom1"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              src={"https://picsum.photos/500/393"}
              alt=""
            />
          </div>
        </div>

        {/* <Card.Img variant="bottom" src="https://picsum.photos/50/50" /> */}

        <Card.Body>
          <Card.Title>The Underground Sistine Chapel</Card.Title>
          <Card.Text>
            Collect the 400 characters of a major piece of art
          </Card.Text>
          <p className="home-page-card-btn">Live</p>
        </Card.Body>
      </Card>
    );
  }
}

export default HomePageCard;
