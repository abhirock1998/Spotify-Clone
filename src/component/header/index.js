import React from "react";
import {
  HomeContainer,
  SpotifyLogoContainer,
  Option,
  SpotifyImage,
  MenuOptionChoice,
  MenuImage,
} from "./styles/header";

export default function HomePage({ children,onToggle, ...restProps }) {
  return <HomeContainer {...restProps}>{children}</HomeContainer>;
}

HomePage.Logo = function Logo({ children, ...restProps }) {
  return <SpotifyLogoContainer {...restProps}>{children}</SpotifyLogoContainer>;
};

HomePage.SpotifyLogo = function SpotifyLogo({ src, ...restProps }) {
  return <SpotifyImage title='Spotify Clone' src={src} {...restProps} />;
};

HomePage.MenuOptions = function Menuoptions({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

HomePage.Option = function Option({ children, ...restProps }) {
  return <MenuOptionChoice {...restProps}>{children}</MenuOptionChoice>;
};
HomePage.MenuLogo = function MenuLogo({ children, onToggle,...restProps }) {
  return <MenuImage onClick={onToggle}  {...restProps}>{children}</MenuImage>;
};
