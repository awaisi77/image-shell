import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../../index.css";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
export class CardComponent extends Component<any, any> {
  render() {
    return (
      <Card className="custom-card" style={{ width: "18rem" }}>
        <div style={{ textAlign: "end", margin: 10 }}>
          <BsHeart className="font-icon"></BsHeart>
          <hr />
        </div>
        {this.props.imgUrl.length > 0 && (
          <div
            style={{
              textAlign: "center",
              display: "table",
              minHeight: "180px",
              maxHeight: "180px",
              maxWidth: "286px",
            }}
          >
            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
              <img
                className="card-img-bottom1"
                style={{ maxHeight: "180px", maxWidth: "286px" }}
                src={this.props.imgUrl}
                alt=""
              />
            </div>
          </div>
        )}

        <Card.Body>
          <div className="row row-no-gutters" style={{ textAlign: "left" }}>
            <div className="col-md-7">
              <div className="card-title-small">{this.props.titleSmall}</div>
              <div className="card-title">{this.props.title}</div>
            </div>
            <div className="col-md-5">
              {this.props.price && (
                <div>
                  <div className="card-title-small">{"Price"}</div>
                  <div
                    className="card-title"
                    style={{ fontSize: "15px", fontWeight: 700 }}
                  >
                    {this.props.price} {this.props.currency}
                  </div>
                </div>
              )}
            </div>
          </div>

          {this.props.showTimeLeft && (
            <div className="card-footer-custom">{"5 minutes left"}</div>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
