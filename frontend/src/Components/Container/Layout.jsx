import React from "react";
import "./Layout.css";

export const Layout = ({ children, hasSidebar, sideBar, heading }) => {
  return (
    <div
      style={{ paddingTop: "124px" }}
      className={hasSidebar ? "layoutSide" : ""}
    >
      <div style={{ padding: "20px 0 30px 0" }}>{heading}</div>
      <div style={{ display: "flex", gap: "25px" }}>
        {hasSidebar && <div className="filterDiv">{sideBar}</div>}
        <div className="childrenDiv">{children}</div>
      </div>
    </div>
  );
};
