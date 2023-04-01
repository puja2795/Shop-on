import React from "react";
import "./Layout.css";

export const Layout = ({ children, hasSidebar, sideBar }) => {
  return (
    <div
      style={{ paddingTop: "124px" }}
      className={hasSidebar ? "layoutSide" : ""}
    >
      <div style={{ display: "flex" }}>
        {hasSidebar && <div className="filterDiv">{sideBar}</div>}
        <div className="childrenDiv">{children}</div>
      </div>
    </div>
  );
};
