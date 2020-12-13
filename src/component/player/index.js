import React from "react";
import {
  PlayerWrapper,
  MainArea,
  Column,
  BodyContent,
  BottomBar,
  SidebarLinks,
  Container,
  SideLinks,
  Songinfo,
  AlbumCover,
  Divider,
  Tilte,
  Left,
  Center,
  Right,
  CenterIcons,
  SongTitle,
  SongArtistname,
  IconAdd ,
  FavouriteIcon,
  Audio,
  Rock
} from "./styles/player";

export default function Player({ children, ...restProps }) {
  return <PlayerWrapper {...restProps}>{children}</PlayerWrapper>;
}

Player.BodyWrapper = function BodyWrapper({ children, ...restProps }) {
  return <MainArea {...restProps}>{children}</MainArea>;
};

Player.Sidebar = function Sidebar({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Player.SidebarOption = function SidebarOption({ children, ...restProps }) {
  return <SidebarLinks {...restProps}>{children}</SidebarLinks>;
};

Player.SidebarOptionLinks = function SidebarOptionLinks({
  children,
  Icon,
  ...restProps
}) {
  return (
    <SideLinks icon={Icon} {...restProps}>
      {children}
    </SideLinks>
  );
};

Player.Horizontal = function Ruler({ ...restProps }) {
  return <Divider {...restProps} />;
};

Player.Playlisttitle = function Playlisttitle({ children, ...restProps }) {
  return <Tilte {...restProps}>{children}</Tilte>;
};

Player.Body = function Body({ children, ...restProps }) {
  return <BodyContent {...restProps}>{children}</BodyContent>;
};

Player.Footer = function Footer({ children, ...restProps }) {
  return <BottomBar {...restProps}>{children}</BottomBar>;
};

Player.FooterLeft = function FooterLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Player.FooterLeftCover = function FooterLeftCover({ children, ...restProps }) {
  return <AlbumCover {...restProps}>{children}</AlbumCover>;
};

Player.FooterLeftSongTitle = function FooterLeftSongTitle({
  children,
  ...restProps
}) {
  return <SongTitle {...restProps}>{children}</SongTitle>;
};

Player.FooterLeftSongArtistName = function FooterLeftSongArtistName({
  children,
  ...restProps
}) {
  return <SongArtistname {...restProps}>{children}</SongArtistname>;
};

Player.FooterCenter = function FooterCenter({ children, ...restProps }) {
  return <Center {...restProps}>{children}</Center>;
};

Player.FooterRight = function FooterRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

Player.FooterCenterIconContainer = function FooterCenterIconContainer({
  children,
  ...restprops
}) {
  return <Container {...restprops}>{children}</Container>;
};

Player.FooterCenterIcon = function FooterCenterIcon({
  children,
  ...restProps
}) {
  return <CenterIcons {...restProps}>{children}</CenterIcons>;
};

Player.FooterLeftSonginfo = function FooterLeftSonginfo({
  children,
  ...restprops
}) {
  return <Songinfo {...restprops}>{children}</Songinfo>;
};


Player.Addicon=function Addicon({children,...restProps}){
  return <IconAdd {...restProps}>{children}</IconAdd>
}


Player.Favourite=function Favourite({children,...restProps}){
  return <FavouriteIcon {...restProps}>{children}</FavouriteIcon>
}

Player.AudioPlayerContainer=function AudioPlayerContainer({children,...restProps}){
return <Audio {...restProps}>{children}</Audio> 
}

Player.MusicPlayer=function MusicPlayer({src,...restProps}){
  return <Rock src={src} controls   {...restProps}/>
}
