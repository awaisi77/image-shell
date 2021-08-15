import React, { Component } from "react";
import { FaGem, FaHeart } from "react-icons/fa";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import CreateCollectionCard from "../Card/CreateCollectionCard";
import { SideBarCollection } from "../Navbar/SideBarCollection";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
// import { Button } from "primereact/components/button/Button";
import { Button } from "react-bootstrap";
import { CollectionManager } from "../../Managers/CollectionManager";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import ViewCollectionCard from "../Card/ViewCollectionCard";
import { Link } from "react-router-dom";
import { UserManager } from "../../Managers/UserManager";
const _window = window as any;
export default class CreateCollection extends React.Component<any, any> {
  toast: any;
  fileUploadRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      displayDialog: false,
      name: "",
      description: "",
      missingImage: false,
      missingName: false,
      currentAccount: "",
      metamaskDetected: false,
      metamaskError: "",
      collectionMessage: "",
      collectionsByUser: [],
    };
    this.onUpload = this.onUpload.bind(this);
    this.onTemplateUpload = this.onTemplateUpload.bind(this);
    this.onTemplateSelect = this.onTemplateSelect.bind(this);
    this.onTemplateRemove = this.onTemplateRemove.bind(this);
    this.onTemplateClear = this.onTemplateClear.bind(this);

    this.headerTemplate = this.headerTemplate.bind(this);
    this.itemTemplate = this.itemTemplate.bind(this);
    this.emptyTemplate = this.emptyTemplate.bind(this);
  }
  handleNameChange = (event: any) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDescriptionChange = (event: any) => {
    this.setState({
      description: event.target.value,
    });
  };
  componentDidMount = async () => {
    await this.connectMetaMask();
  };
  startApp = async (provider: any) => {
    const web3 = new Web3((window as any).ethereum);
    let x = _window.ethereum.enable(); // get permission to access accounts
    let accounts = await web3.eth.getAccounts();
    if (accounts && accounts.length == 0) {
      this.setState({
        metamaskError: "Please unlock MetaMask!",
      });
    }

    let data = new URLSearchParams();
    data.append("UserId", accounts[0]);
    console.log(data.get("UserId"));
    new Response(data).text().then(console.log);
    // var data = JSON.stringify({
    //   UserId: accounts[0],
    // });
    debugger;
    let createUser = await UserManager.createUser(data);
    if (createUser.success) {
      // self.toast.show({
      //   severity: "info",
      //   summary: "Success",
      //   detail: createUser.message,
      // });
      console.log(createUser.message);
    } else {
      if (createUser.error) {
        console.log(createUser.message);

        // self.toast.show({
        //   severity: "error",
        //   summary: "Fail",
        //   detail: createUser.message,
        // });
      }
    }
    console.log("101", accounts);
    this.setState({ currentAccount: accounts[0] }, async () => {
      let res = await CollectionManager.getCollectionByUserId(accounts[0]);
      if (res.success) {
        this.setState({
          collectionsByUser: res.data,
          collectionMessage: res.message,
        });
      } else {
        this.setState({
          collectionMessage: res.message,
        });
      }
      console.log("111state", this.state);
    });
    _window.ethereum.on("accountsChanged", (_accounts: any) => {
      this.setState({
        currentAccount: _accounts[0] ? _accounts[0] : "",
        metamaskError: _accounts[0] ? "Please unlock MetaMask!" : "",
      });
    });
    // detect Network account change
    // _window.ethereum.on("networkChanged", (networkId: any) => {
    //   debugger;
    //   console.log("102", this.state);
    // });
    // _window.ethereum.on("disconnect", (networkId: any) => {
    //   debugger;
    //   console.log("102", this.state);
    // });
  };
  connectMetaMask = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      this.startApp(provider);
      this.setState({ metamaskDetected: true });
    } else {
      this.setState({ metamaskError: "Please install MetaMask!" });
      console.log("Please install MetaMask!");
    }
    // if (_window.ethereum) {
    //   // (window as any).ethereum.on("connect", (connectInfo: any) => {});
    //   // use MetaMask's provider
    //   const web3 = new Web3((window as any).ethereum);
    //   _window.ethereum.enable(); // get permission to access accounts
    //   let accounts = await web3.eth.getAccounts();
    //   _window.ethereum.on("connect", (connectInfo: any) => {
    //     console.log(connectInfo);
    //     debugger;
    //   });
    //   debugger;
    //   // detect Metamask account change
    //   _window.ethereum.on("accountsChanged", (accounts: any) => {
    //     console.log("accountsChanges", accounts);
    //   });

    //   // detect Network account change
    //   _window.ethereum.on("networkChanged", (networkId: any) => {
    //     console.log("networkChanged", networkId);
    //   });
    // } else {
    //   console.warn(
    //     "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live"
    //   );
    //   // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    //   const web3 = new Web3(
    //     new Web3.providers.HttpProvider("http://127.0.0.1:7545")
    //   );
    // }
  };
  onUpload() {
    this.toast.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  }

  onTemplateSelect(e: any) {
    let totalSize = this.state.totalSize;
    e.files.forEach((file: any) => {
      totalSize += file.size;
    });

    this.setState({
      totalSize,
    });
  }

  headerTemplate(options: any) {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = this.state.totalSize / 10000;
    const formatedValue = this.fileUploadRef
      ? this.fileUploadRef.formatSize(this.state.totalSize)
      : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        {/* <ProgressBar
          value={value}
          displayValueTemplate={() => `${formatedValue} / 1 MB`}
          style={{ width: "300px", height: "20px", marginLeft: "auto" }}
        ></ProgressBar> */}
      </div>
    );
  }
  itemTemplate(file: any, props: any) {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            display: "grid",
            minHeight: "180px",
            maxHeight: "300px",
            maxWidth: "300px",
          }}
        >
          <div style={{ display: "table-cell", verticalAlign: "middle" }}>
            <img
              className="card-img-bottom1"
              style={{ maxHeight: "180px", maxWidth: "286px" }}
              src={file.objectURL}
              alt=""
            />
          </div>
        </div>
      </div>
      //   <div className="p-d-flex p-ai-center p-flex-wrap">
      //     <div className="p-d-flex p-ai-center" style={{ width: "40%" }}>
      //       <img
      //         alt={file.name}
      //         role="presentation"
      //         src={file.objectURL}
      //         width={100}
      //       />
      //       <span className="p-d-flex p-dir-col p-text-left p-ml-3">
      //         {/* {file.name} */}
      //         {/* <small>{new Date().toLocaleDateString()}</small> */}
      //       </span>
      //     </div>
      /* <Tag
          value={props.formatSize}
          severity="warning"
          className="p-px-3 p-py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger p-ml-auto"
          onClick={() => this.onTemplateRemove(file, props.onRemove)}
        /> */
      //   </div>
    );
  }

  emptyTemplate() {
    return (
      <div
        style={{
          textAlign: "center",
          display: "grid",
          minHeight: "180px",
          maxHeight: "300px",
          maxWidth: "300px",
        }}
        // style={{ textAlign: "center" }}
        // className="p-d-flex p-ai-center p-dir-col"
      >
        <i
          className="pi pi-image p-mt-3 p-p-5"
          style={{
            fontSize: "5em",

            // borderRadius: "50%",
            // backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <div
          style={{ fontSize: "15px", color: "var(--text-color-secondary)" }}
          className="p-my-5"
        >
          Drag and Drop Image Here
        </div>
      </div>
    );
  }
  onTemplateUpload(e: any) {
    let totalSize = 0;
    e.files.forEach((file: any) => {
      totalSize += file.size || 0;
    });

    this.setState(
      {
        totalSize,
      },
      () => {
        this.toast.show({
          severity: "info",
          summary: "Success",
          detail: "File Uploaded",
        });
      }
    );
  }

  onTemplateRemove(file: any, callback: any) {
    debugger;
    this.fileUploadRef.files = null;
    this.setState(
      (prevState: any) => ({
        totalSize: prevState.totalSize - file.size,
      }),
      callback
    );
  }

  onTemplateClear() {
    debugger;
    this.fileUploadRef.files = null;

    this.setState({ totalSize: 0 });
  }
  onHide = () => {
    this.setState({
      displayDialog: false,
    });
  };

  renderFooter() {
    return (
      <div>
        {/* <Button
          label="No"
          icon="pi pi-times"
          onClick={() => this.onHide()}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => this.onHide()}
          autoFocus
        /> */}
      </div>
    );
  }
  showDialog = () => {
    this.setState({
      displayDialog: true,
    });
  };
  btn_CreateCollectionClick = async () => {
    this.setState({
      missingImage: false,
      missingName: false,
    });
    let data = new FormData();
    let isError = false;
    // let reader = new FileReader();
    // reader.readAsDataURL(this.fileUploadRef.files[0]);
    // reader.onload = (e: any) => {
    // data.append("logo", e.currentTarget.result);

    if (!this.fileUploadRef.files || this.fileUploadRef.files.length <= 0) {
      debugger;
      isError = true;
      this.setState({
        missingImage: true,
      });
    }
    if (this.state.name.length <= 0) {
      isError = true;
      this.setState({
        missingName: true,
      });
    }
    if (isError) return;
    data.append("logo", this.fileUploadRef.files[0]);
    data.append("UserId", this.state.currentAccount);
    data.append("CollectionName", this.state.name);
    data.append("Description", this.state.description);
    let res = await CollectionManager.createCollection(data);
    // let res = { success: true, message: "" };
    if (res.success) {
      this.setState(
        {
          name: "",
          description: "",
          totalSize: 0,
        },
        () => {
          this.fileUploadRef.clear();
          this.showSuccessToast(res.message);
        }
      );
    } else {
      this.toast.show({
        severity: "error",
        summary: "Error",
        detail: res.message,
      });
    }
    // };
  };
  showSuccessToast = (message: string) => {
    let self = this;
    self.toast.show({
      severity: "info",
      summary: "Success",
      detail: message,
      life: 5000,
    });
  };
  render() {
    const chooseOptions = {
      icon: "pi pi-fw pi-images",
      iconOnly: true,
      className: "custom-choose-btn p-button-rounded p-button-outlined",
    };
    const uploadOptions = {
      icon: "pi pi-fw pi-cloud-upload",
      iconOnly: true,
      className:
        "custom-upload-btn p-button-success p-button-rounded p-button-outlined d-none",
    };
    const cancelOptions = {
      icon: "pi pi-fw pi-times",
      iconOnly: true,
      className:
        "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
    };
    return (
      <div>
        <SideBarCollection></SideBarCollection>
        <div className="main-custom">
          <h2>My Collections</h2>
          <p>
            Create collections (your own storefronts), upload digital creations,
            configure your royalty, and sell NFTs to your fans - all for free!
            You can also manage smart contracts that you created outside of
            OpenSea.{" "}
          </p>
          <div className="rowq">
            <div className="col-md-12q">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <CreateCollectionCard
                  showDialog={this.showDialog}
                ></CreateCollectionCard>
              </div>
              <div>
                {this.state.collectionsByUser.map((el: any) => {
                  return (
                    <div
                      style={{
                        display: "inline-block",
                        padding: 10,
                        paddingLeft: 0,
                        textAlign: "center",
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/collections/${el.CollectionName}/assets/edit`,
                          state: {
                            collection: el,
                            currentAccount: this.state.currentAccount,
                          },
                        }}
                      >
                        <ViewCollectionCard
                          img={`http://localhost:3894/storage/${el.Logo}`}
                          name={el.CollectionName}
                        ></ViewCollectionCard>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Dialog
            header="Create your collection"
            visible={this.state.displayDialog}
            style={{ width: window.innerWidth > 450 ? "40vw" : "unset" }}
            //   footer={this.renderFooter()}
            onHide={() => this.onHide()}
          >
            <p>
              You can change these values later, along with configuring external
              URLs, payment options, and trading fees.
            </p>
            <div>
              <Toast
                ref={(el: any) => {
                  this.toast = el;
                }}
              ></Toast>

              <Tooltip
                target=".custom-choose-btn"
                content="Choose"
                position="bottom"
              />
              <Tooltip
                target=".custom-upload-btn"
                content="Upload"
                position="bottom"
              />
              <Tooltip
                target=".custom-cancel-btn"
                content="Clear"
                position="bottom"
              />
              <div style={{ color: this.state.missingImage ? "red" : "" }}>
                Logo *
              </div>
              <div
                className="card"
                style={{ width: window.innerWidth > 450 ? "50%" : "unset" }}
              >
                <FileUpload
                  ref={(el) => (this.fileUploadRef = el)}
                  name="demo[]"
                  // url="https://primefaces.org/primereact/showcase/upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  // onUpload={this.onTemplateUpload}
                  // onSelect={this.onTemplateSelect}
                  onError={this.onTemplateClear}
                  onClear={this.onTemplateClear}
                  headerTemplate={this.headerTemplate}
                  itemTemplate={this.itemTemplate}
                  emptyTemplate={this.emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
              </div>
              {this.state.missingImage && (
                <div style={{ fontSize: "12px", color: "red" }}>
                  Logo is Required{" "}
                </div>
              )}
              <div>
                <TextField
                  id="enter-email"
                  label="Name *"
                  variant="outlined"
                  className="filled-full-width"
                  //   style={{ margin: 8 }}
                  //   InputProps={{ style: { fontSize: 20 } }}
                  placeholder="Name"
                  error={this.state.missingName}
                  helperText={this.state.missingName ? "Required Field" : ""}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleNameChange}
                  value={this.state.name}
                />
              </div>

              <div>
                <TextField
                  id="enter-email"
                  label="Description"
                  variant="outlined"
                  className="filled-full-width"
                  //   style={{ margin: 8 }}
                  //   InputProps={{ style: { fontSize: 20 } }}
                  placeholder="Description"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={4}
                  onChange={this.handleDescriptionChange}
                  value={this.state.description}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <Button
                  style={{ width: "160px" }}
                  variant="primary"
                  onClick={this.btn_CreateCollectionClick}
                >
                  Create
                </Button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
      // <div>
      //   {this.state.currentAccount && this.state.currentAccount.length > 0 ? (

      //   ) : (
      //     <h1>{this.state.metamaskError}</h1>
      //   )}
      // </div>
    );
  }
}
