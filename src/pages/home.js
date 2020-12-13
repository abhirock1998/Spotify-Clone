import React, { useState } from "react";
import { HeaderBox } from "../component";
import {
  SidebarMobileview,
  BodyDisplayer,
 
} from "../container";

export default function SpotifyHome() {
  const [show, setShow] = useState(false);

  const ontoggle = () => {
    setShow(!show);
  };

  return (
    <>
      <SidebarMobileview ontoggle={ontoggle} isOpen={show} />
      <HeaderBox>
        <HeaderBox.Logo>
          <HeaderBox.SpotifyLogo src="/images/logo.png" alt="SPOTIFY-LOGO" />
        </HeaderBox.Logo>
        <HeaderBox.MenuLogo onToggle={ontoggle}>
          <img src="/images/hamburger.jpg" alt="MOBILE-ICON" />
        </HeaderBox.MenuLogo>
        <HeaderBox.MenuOptions>
          <HeaderBox.Option>
            <span>Premium</span>
          </HeaderBox.Option>
          <HeaderBox.Option>
            <span>Help</span>
          </HeaderBox.Option>
          <HeaderBox.Option>
            <span>Download</span>
          </HeaderBox.Option>
          <span>|</span>
          <HeaderBox.Option>
            <span>SignUp</span>
          </HeaderBox.Option>
          <HeaderBox.Option>
            <span>LogIn</span>
          </HeaderBox.Option>
        </HeaderBox.MenuOptions>
      </HeaderBox>
      <BodyDisplayer />
    </>
  );
}
