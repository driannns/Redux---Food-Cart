import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="position-absolute" style={{ top: "10vh" }}>
        <Sidebar />
        <div
          className="p-4 position-absolute"
          style={{ width: "70vw", left: "10vw" }}
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainLayout;
