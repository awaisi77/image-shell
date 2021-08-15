import React, { Component } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export class CreateCollectionDialog extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  onHide = (name: any) => {
    this.setState({
      [`${name}`]: false,
    });
  };

  renderFooter(name: any) {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => this.onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => this.onHide(name)}
          autoFocus
        />
      </div>
    );
  }

  render() {
    return (
      <div className="dialog-demo">
        <Dialog
          header="Header"
          visible={this.state.displayBasic}
          style={{ width: "50vw" }}
          footer={this.renderFooter("displayBasic")}
          onHide={() => this.onHide("displayBasic")}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>
    );
  }
}
