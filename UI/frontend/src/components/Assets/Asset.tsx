import React, { Component } from "react";
import { BsHeart, BsInfoCircle } from "react-icons/bs";
import { useParams } from "react-router";
import { Card, Button } from "react-bootstrap";
import { ItemManager } from "../../Managers/ItemManager";
import { Spinner } from "../Spinner/Spinner";
import { Accordion, AccordionTab } from "primereact/accordion";

export default class Asset extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      itemId: this.props.match.params.id,
      data: {
        item: null,
        status: false,
      },
      isLoading: false,
    };
  }

  async componentDidMount() {
    try {
      await this.getItemByID();
    } catch (error) {
      this.setState({
        isLoading: false,
        data: {
          item: null,
          status: false,
        },
      });
    }
  }

  getItemByID = async () => {
    let item = await ItemManager.getItemsById(this.state.itemId);
    console.log("item", item);
    if (item.success) {
      this.setState({
        data: {
          item: item.data,
          status: true,
        },
      });
    } else {
      this.setState({
        data: {
          item: null,
          status: false,
        },
      });
    }
  };

  render() {
    let block =
      this.state.data.status === true ? (
        <div
          className="row"
          style={{ padding: 20, margin: "40px 60px 40px 60px" }}
        >
          <div className="col-md-5">
            <div
              style={{
                textAlign: "center",
                display: "table",
                minHeight: "550px",
                maxHeight: "550px",
                maxWidth: "95%",
                minWidth: "95%",
                border: " 1px solid #dcdcdc",
              }}
            >
              <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                <img
                  className="card-img-bottom1"
                  style={{ maxHeight: "500px", maxWidth: "92%" }}
                  src={this.state.data.item.Image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "Avenir Next,Avenir,Avenir Next Local,sans-serif",
                }}
                href="Verified Collection"
              >
                Verified Collection <BsInfoCircle></BsInfoCircle>
              </a>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h2>
                {this.state.data.item.Name}
                {/* #{this.state.data.item.ItemId} */}
              </h2>
            </div>

            <div style={{ marginTop: "40px" }}>
              <div className="d-inline-block assets-metadata">
                <BsHeart></BsHeart> Owned by HugMe
              </div>
              <div className="d-inline-block ml-4 assets-metadata">
                <BsHeart></BsHeart> 40 views
              </div>

              <div className="d-inline-block ml-4 assets-metadata">
                <BsHeart></BsHeart> 50 favourites
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Card style={{ background: "#FBFDFF" }}>
                <Card.Body style={{ padding: "15px" }}>
                  <div className="assets-metadata">Current Price</div>
                  <Card.Text>
                    <div
                      className="d-inline-block"
                      style={{ verticalAlign: "middle" }}
                    >
                      <img src="https://picsum.photos/30/30" alt="" />
                    </div>

                    <div
                      className="d-inline-block ml-2"
                      style={{ verticalAlign: "middle" }}
                    >
                      {" "}
                      <h2>
                        {this.state.data.item.Price !== null
                          ? this.state.data.item.Price
                          : "NA"}{" "}
                      </h2>{" "}
                    </div>
                    <div className="d-inline-block ml-2 assets-metadata">
                      {" "}
                      ({this.state.data.item.Currency})
                    </div>
                  </Card.Text>
                  <Button
                    style={{ paddingRight: "10%", paddingLeft: "10%" }}
                    variant="primary"
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <Card>
                <Card.Header>Description</Card.Header>
                <Card.Body>
                  <div className="assets-metadata">Created by HugMe</div>
                  <Card.Text>
                    {this.state.data.item.Description !== null
                      ? this.state.data.item.Description
                      : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mt-4">
              <h5>Extra Details</h5>
              <Accordion>
                <AccordionTab header="Properties">
                  <p>
                    {this.state.data.item.hasOwnProperty("Properties")
                      ? this.state.data.item.Properties.map((obj: any) => {
                          return (
                            <li>
                              {obj.Name} : {obj.Value}{" "}
                            </li>
                          );
                        })
                      : ""}
                  </p>
                </AccordionTab>
                <AccordionTab header="Level">
                  <p>
                    {this.state.data.item.hasOwnProperty("Levels")
                      ? this.state.data.item.Levels.map((obj: any) => {
                          return (
                            <li>
                              {obj.Name} : {obj.Value1} : {obj.Value2}{" "}
                            </li>
                          );
                        })
                      : ""}
                  </p>
                </AccordionTab>
                <AccordionTab header="Stats">
                  <p>
                    {this.state.data.item.hasOwnProperty("Stats")
                      ? this.state.data.item.Stats.map((obj: any) => {
                          return (
                            <li>
                              {obj.Name} : {obj.Value1} : {obj.Value2}{" "}
                            </li>
                          );
                        })
                      : ""}
                  </p>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>
      ) : (
        ""
      );
    return (
      <div>
        <Spinner loading={this.state.isLoading} />
        {block}
      </div>
    );
  }
}
