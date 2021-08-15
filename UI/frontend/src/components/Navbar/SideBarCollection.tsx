import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
export class SideBarCollection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      visibleLeft: true,
      //   visibleRight: false,
      //   visibleTop: false,
      //   visibleBottom: false,
      //   visibleFullScreen: false,
      //   visibleCustomToolbar: false,
    };
  }

  render() {
    return (
      <div className="sidenav">
        <a href="#">My Payouts</a>
        <a href="#">My Collections</a>
        <a href="#">Community & Help</a>
      </div>
    );
  }
}
