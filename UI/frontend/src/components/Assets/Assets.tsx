import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../Card/CardComponent";
import { ItemManager } from "../../Managers/ItemManager";

export class Assets extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        items: [],
        status: false,
      },
      isLoading: false,
    };
  }
  async componentDidMount() {
    try {
      await this.getItems();
    } catch (error) {
      this.setState({
        isLoading: false,
        data: {
          items: null,
          status: false,
        },
      });
    }
  }
  getItems = async () => {
    let items = await ItemManager.getItemsMarketplace();
    console.log("item", items);
    if (items.success) {
      this.setState({
        data: {
          items: items.data,
          status: true,
        },
      });
    } else {
      this.setState({
        data: {
          items: null,
          status: false,
        },
      });
    }
  };
  render() {
    let items = this.state.data.items.map((c: any, i: any) => {
      return (
        <div
          style={{
            display: "inline-block",
            padding: 10,
            textAlign: "center",
          }}
        >
          <Link
            to={{ pathname: `/assets/${c.ItemId}`, state: { price: 0.002 } }}
          >
            <CardComponent
              titleSmall={"Collection"}
              title={c.Name}
              price={c.Price}
              currency={c.Currency}
              imgUrl={c.Image}
            ></CardComponent>
          </Link>
        </div>
      );
    });
    let block = this.state.data.status === true ? items : "No Items";
    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          {block}
        </div>
      </div>
    );
  }
}

export default Assets;
