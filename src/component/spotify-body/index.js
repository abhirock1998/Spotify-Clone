import React from "react";

import {
  BodyContainer,
  HeaderComponent,
  Left,
  Right,
  UserInfo,
  WeekContainer,
  WeekImageBox,
  WeeklyRight,
  PlaylistDisplayer,
  Icon,
  ListSong,
  Option,One,Two,Three,Four,Five
  
} from "./styles/spotify-body";

export default function SpotifyBody({ children, ...restProps }) {
 return <BodyContainer {...restProps}>{children}</BodyContainer>;
}

SpotifyBody.Header = function Header({ children, ...restProps }) {
  return <HeaderComponent {...restProps}>{children}</HeaderComponent>;
};

SpotifyBody.Hedaerleft = function Hedaerleft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};



SpotifyBody.HeaderRight = function HeaderRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};


SpotifyBody.UserInfoDisplay=function UserInfoDisplay({children,...restProps}){
    return <UserInfo {...restProps}>{children}</UserInfo>
}


SpotifyBody.WeeklyContainer=function WeekylyContainer({children,...restProps}){
    return <WeekContainer {...restProps}>{children}</WeekContainer>
}

SpotifyBody.WeeklyImage=function WeeklyImage({children,...restProps}){
    return <WeekImageBox {...restProps}>{children}</WeekImageBox>
}

SpotifyBody.WeeklyDescription=function WeeklyDescription({children,...restProps}){
    return <WeeklyRight {...restProps}>{children}</WeeklyRight>
}

SpotifyBody.SongPlaylist=function SongPlaylist({children,...restProps}){
  return <PlaylistDisplayer {...restProps}>{children}</PlaylistDisplayer>
}


SpotifyBody.SongIcon=function SongIcon({children,...restProps}){
  return <Icon {...restProps}>{children}</Icon>
}

SpotifyBody.ListOfSong=function ListOfSong({children,...restProps}){
return <ListSong {...restProps}>{children}</ListSong>
}

SpotifyBody.SongListIcon=function SongListIcon({children,...restProps}){
  return <Option {...restProps}>{children}</Option>
}


SpotifyBody.First=function First({children,...restProps}){
  return <One {...restProps}>{children}</One>
}



SpotifyBody.Second=function Second({children,...restProps}){
  return <Two {...restProps}>{children}</Two>
}
SpotifyBody.Third=function Third({children,...restProps}){
  return <Three {...restProps}>{children}</Three>
}
SpotifyBody.Fourth=function Fourth({children,...restProps}){
  return <Four {...restProps}>{children}</Four>
}
SpotifyBody.Fifth=function Fifth({children,...restProps}){
  return <Five {...restProps}>{children}</Five>
}