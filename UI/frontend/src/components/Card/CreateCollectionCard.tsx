import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
export class CreateCollectionCard extends Component<any, any> {
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
            // maxWidth: "286px",
          }}
        >
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <div
              className="card-img-bottom1"
              // style={{ maxWidth: "286px" }}
            >
              <MdStoreMallDirectory
                className="font-icon"
                style={{ height: "80px", width: "80px" }}
              ></MdStoreMallDirectory>
            </div>
          </div>
        </div>
        {/* <Card.Img variant="bottom" src="https://picsum.photos/50/50" /> */}
        <Card.Body>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            Create new collection
          </div>

          <div style={{ margin: "15px 0", textAlign: "center" }}>
            <Button
              onClick={this.props.showDialog}
              style={{ width: "160px" }}
              variant="primary"
            >
              Create
            </Button>
          </div>
          <div style={{ margin: "15px 0", textAlign: "center" }}>
            <a style={{ fontSize: "14px" }} href="/">
              or add an existing contract
            </a>
          </div>

          {/* <Card.Text>Some quick</Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default CreateCollectionCard;
