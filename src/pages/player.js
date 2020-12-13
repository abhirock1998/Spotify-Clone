// eslint-disable-next-line

import React, {  useState } from "react";
import { PlayerComponent } from "../component";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import AddIcon from "@material-ui/icons/Add";
import { Slider, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import { useDataLayerValue } from "../data-layer";
import { SpotifyBodyContainer } from "../container";

export default function Playerpage({ spotify, weekly }) {
  const [{ userPlaylist }] = useDataLayerValue();
  const [selectSong, setSelectSong] = useState({});

  const pressed = (id, img, artist, album, uri) => {
    setSelectSong({
      id: id,
      image: img,
      artist: artist,
      album: album,
      uri: uri,
    });
  };

  return (
    <PlayerComponent>
      <PlayerComponent.BodyWrapper>
        <PlayerComponent.Sidebar>
          <img src="/images/logo.png" alt="spotify-logo" />
          <PlayerComponent.SidebarOption>
            <PlayerComponent.SidebarOptionLinks>
              <span>
                <HomeIcon />
              </span>{" "}
              Home
            </PlayerComponent.SidebarOptionLinks>
            <PlayerComponent.SidebarOptionLinks>
              <span>
                <SearchIcon />
              </span>{" "}
              Serach
            </PlayerComponent.SidebarOptionLinks>
            <PlayerComponent.SidebarOptionLinks>
              <span>
                {" "}
                <LibraryMusicIcon />
              </span>{" "}
              Your gallery
            </PlayerComponent.SidebarOptionLinks>

            <br />

            <PlayerComponent.Playlisttitle>
              PLAYLISTS
            </PlayerComponent.Playlisttitle>
            <PlayerComponent.SidebarOptionLinks>
              <PlayerComponent.Addicon>
                <AddIcon />
              </PlayerComponent.Addicon>{" "}
              Create Playlist
            </PlayerComponent.SidebarOptionLinks>
            <PlayerComponent.SidebarOptionLinks>
              <PlayerComponent.Favourite>
                <FavoriteIcon />
              </PlayerComponent.Favourite>{" "}
              Liked Songs
            </PlayerComponent.SidebarOptionLinks>
            <PlayerComponent.Horizontal />
            {userPlaylist?.items?.map((playlist) => {
              console.log(playlist);
              return (
                <PlayerComponent.SidebarOptionLinks>
                  {playlist.name}
                </PlayerComponent.SidebarOptionLinks>
              );
            })}
          </PlayerComponent.SidebarOption>
        </PlayerComponent.Sidebar>
        <PlayerComponent.Body>
          <SpotifyBodyContainer pressed={pressed} spotify={spotify} />
        </PlayerComponent.Body>
      </PlayerComponent.BodyWrapper>
      <PlayerComponent.Footer>
        <PlayerComponent.FooterLeft>
          <PlayerComponent.FooterLeftCover>
            <img src={selectSong?.image} alt={selectSong?.album} />
          </PlayerComponent.FooterLeftCover>

          <PlayerComponent.FooterLeftSonginfo>
            <PlayerComponent.FooterLeftSongTitle>
              {selectSong?.album}
            </PlayerComponent.FooterLeftSongTitle>
            <PlayerComponent.FooterLeftSongArtistName>
              {selectSong?.artist}
            </PlayerComponent.FooterLeftSongArtistName>
          </PlayerComponent.FooterLeftSonginfo>
        </PlayerComponent.FooterLeft>
        <PlayerComponent.FooterCenter>
          <PlayerComponent.FooterCenterIconContainer>
            <PlayerComponent.FooterCenterIcon>
              <ShuffleIcon />
            </PlayerComponent.FooterCenterIcon>
            <PlayerComponent.FooterCenterIcon>
              <SkipPreviousIcon />
            </PlayerComponent.FooterCenterIcon>
            <PlayerComponent.FooterCenterIcon>
              <PlayCircleOutlineIcon />
            </PlayerComponent.FooterCenterIcon>
            <PlayerComponent.FooterCenterIcon>
              <SkipNextIcon />
            </PlayerComponent.FooterCenterIcon>
            <PlayerComponent.FooterCenterIcon>
              <RepeatIcon />
            </PlayerComponent.FooterCenterIcon>
          </PlayerComponent.FooterCenterIconContainer>

          <PlayerComponent.AudioPlayerContainer>
            <PlayerComponent.MusicPlayer src="" />
          </PlayerComponent.AudioPlayerContainer>
        </PlayerComponent.FooterCenter>
        <PlayerComponent.FooterRight>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </PlayerComponent.FooterRight>
      </PlayerComponent.Footer>
    </PlayerComponent>
  );
}
