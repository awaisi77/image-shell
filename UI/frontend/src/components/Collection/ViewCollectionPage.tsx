/* eslint-disable no-use-before-define */
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { SideBarCollection } from "../Navbar/SideBarCollection";
import Create from "@material-ui/icons/Create";
import OpenInBrowser from "@material-ui/icons/OpenInBrowser";
import ViewList from "@material-ui/icons/ViewList";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ItemManager } from "../../Managers/ItemManager";
import ViewCollectionCard from "../Card/ViewCollectionCard";
import { CardComponent } from "../Card/CardComponent";
export default class ViewCollectionPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collection: this.props.location.state.collection,
      collectionItems: [],
      itemMessage: "",
    };
  }
  componentDidMount = () => {
    this.getItemsByCollection();
    console.log("colect", this.state);
    console.log("111", this.props.location.state);
  };
  getItemsByCollection = async () => {
    let items = await ItemManager.getItemsByCollection(
      this.props.location.state.currentAccount,
      this.state.collection.CollectionId
    );
    if (items.success) {
      this.setState(
        {
          collectionItems: items.data,
          itemMessage: items.message,
        },
        () => {
          console.log(this.state);
          debugger;
        }
      );
    } else {
      this.setState({ itemMessage: items.message });
    }
  };
  render() {
    return (
      <div>
        <SideBarCollection></SideBarCollection>
        <div className="main-custom">
          <div
            style={{
              maxWidth: "100%",
              minHeight: "300px",
              height: "300px",
              display: "flex",
            }}
          >
            <img
              src="http://localhost:3894/storage/bg.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="row row-no-gutters mt-4">
            <div className="col-md-2">
              <img
                style={{ height: "200px", width: "200px" }}
                src={
                  "http://localhost:3894/storage/" + this.state.collection.Logo
                }
                alt=""
              />
            </div>
            <div className="col md-10">
              <div className="row row-no-gutters h-75">
                <div className="col-md-12 ">
                  <h2 className="ml-4">
                    {this.state.collection.CollectionName}
                  </h2>
                </div>
              </div>
              <div className="row row-no-gutters">
                <div className="col-md-12">
                  <div className="ml-4">
                    <Button
                      style={{ width: "150px" }}
                      variant="outlined"
                      color="primary"
                      startIcon={<Create />}
                      className="mr-3"
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ width: "150px" }}
                      variant="outlined"
                      color="primary"
                      startIcon={<OpenInBrowser />}
                      className="mr-3"
                    >
                      Visit
                    </Button>
                    <Button
                      style={{ width: "150px" }}
                      variant="outlined"
                      color="primary"
                      startIcon={<ViewList />}
                      className="mr-3"
                    >
                      Roayalities
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4>Items</h4>
            <hr />
          </div>
          <div>
            <Link
              className="btn btn-primary"
              color="primary"
              to={
                "/collection/" +
                this.state.collection.CollectionId +
                "/item/create"
              }
            >
              Add New Item
            </Link>
          </div>
          <div className="row row-no-gutters mt-4">
            <div className="col-md-9 pl-4 pr-4">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={["A", "B", "C"].map((option) => option)}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label="Search"
                    margin="normal"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="col-md-2">
              <FormControl variant="outlined">
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{ marginTop: "16px" }}
                >
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"Sort"}
                  label="Age"
                  style={{ width: "250px", marginTop: "16px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row row-no-gutters">
            {this.state.collectionItems.map((el: any) => {
              return (
                <div className="ml-4 mt-3 d-inline-block">
                  <Link
                    to={{
                      pathname: `/assets/${el.ItemId}`,
                      state: { price: 0.002 },
                    }}
                  >
                    <CardComponent
                      titleSmall="mycrypto"
                      title={el.Name}
                      price={el.Price}
                      imgUrl={el.Image}
                    ></CardComponent>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
