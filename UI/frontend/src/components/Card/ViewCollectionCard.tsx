import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
export class ViewCollectionCard extends Component<any, any> {
  render() {
    return (
      <Card
        className="custom-card"
        style={{ width: window.innerWidth > 450 ? "16rem" : "100%" }}
      >
        <div
          style={{
            textAlign: "center",
            display: "table",
            minHeight: "100px",
            maxWidth: "255px",
          }}
        >
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <div
              className="card-img-bottom1"
              style={{
                maxWidth: "255px",
                width: "255px",
                height: "255px",
                display: "table-cell",
                verticalAlign: "middle",
              }}
            >
              <img
                src={this.props.img}
                style={{ maxWidth: "255px", padding: 12 }}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <Card.Img variant="bottom" src="https://picsum.photos/50/50" /> */}
        <Card.Body>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {this.props.name}
          </div>

          {/* <Card.Text>Some quick</Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default ViewCollectionCard;
