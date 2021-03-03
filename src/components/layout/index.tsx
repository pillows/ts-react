import React from "react";
import SideBar from "./sidebar";
import TopBar from "./topbar";
import { StaticContext } from "react-router";
import { RouteComponentProps, RouteProps } from "react-router-dom";

export interface RouteI extends RouteComponentProps {
  children : JSX.Element[] | JSX.Element
}

function Layout(props:RouteI ) {
  return (
    <div className="layout-wrapper">
      <SideBar history={props.history} />
      <div className="layout-aside">
        <TopBar />
        <div className="content-container">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
