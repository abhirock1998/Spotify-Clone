import React from "react";
import {
  SongContainer,
  Details,
  AlbumCover,
  Index,
  AlbumTitle,
  Date,
  Length,
} from "./styles/song-row";

export default function SongDisplayer({ children,ontap, ...restProps }) {
  return <SongContainer onClick={ontap} {...restProps}>{children}</SongContainer>;
}

SongDisplayer.SerialNumber = function SerialNumber({ children, ...restProps }) {
  return <Index  {...restProps}>{children}</Index>;
};

SongDisplayer.Image = function Image({ children, ...restProps }) {
  return <AlbumCover {...restProps}>{children}</AlbumCover>;
};

SongDisplayer.SongDetails = function SongDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

SongDisplayer.AlbumName = function AlbumName({ children, ...restProps }) {
  return <AlbumTitle {...restProps}>{children}</AlbumTitle>;
};

SongDisplayer.DateAdded = function DateAdded({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

SongDisplayer.SongLength = function SongLength({ children, ...restProps }) {
  return <Length {...restProps}>{children}</Length>;
};
