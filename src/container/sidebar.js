import React from "react";

import Sidebar from "../component/sidebar";

export default function SideBarDisplayer({ ontoggle, isOpen }) {
  return (
    <Sidebar isOpen={isOpen}>
      <Sidebar.CloseBtn onClick={ontoggle}>
        <img src="/images/close-slim.png" alt="mobile-icon" />
      </Sidebar.CloseBtn>
      <Sidebar.ContentWrapper>
        <Sidebar.Option>Premium</Sidebar.Option>
        <Sidebar.Option>Help</Sidebar.Option>
        <Sidebar.Option>Download</Sidebar.Option>
        <Sidebar.Option style={{ pointerEvents: "none" }}>
          <hr />
        </Sidebar.Option>
        <Sidebar.Option>SignUp</Sidebar.Option>
        <Sidebar.Option>LogIn</Sidebar.Option>
      </Sidebar.ContentWrapper>
    </Sidebar>
  );
}
