import React, { useState } from "react";
import { SpotifyBodyComponent } from "../component";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../data-layer";
import { SongRow } from "../container";
export default function SpotifyBodyAssemebler({ pressed }) {
  const [{ user, weekly_discover }] = useDataLayerValue();
  const [_test, settest] = useState([]);

  const test = ({ likes }) => {
    var part = likes?.toString();
    var firstPart = part?.slice(0, 2);
    var secondPart = part?.slice(2);
    let total = firstPart + "," + secondPart;
    return total;
  };

  return (
    <SpotifyBodyComponent>
      <SpotifyBodyComponent.Header>
        <SpotifyBodyComponent.Hedaerleft>
          <SearchIcon />
          <input type="text" placeholder="Search  your Song,Album,Artist" />
        </SpotifyBodyComponent.Hedaerleft>
        <SpotifyBodyComponent.HeaderRight>
          <SpotifyBodyComponent.UserInfoDisplay>
            <Avatar src={user?.images[0]?.url} alt="user-name" />
            <h5>{user?.display_name}</h5>
          </SpotifyBodyComponent.UserInfoDisplay>
        </SpotifyBodyComponent.HeaderRight>
      </SpotifyBodyComponent.Header>
      <SpotifyBodyComponent.WeeklyContainer>
        <SpotifyBodyComponent.WeeklyImage>
          <img
            src={weekly_discover?.images[0]?.url}
            alt={weekly_discover?.name}
          />
        </SpotifyBodyComponent.WeeklyImage>
        <SpotifyBodyComponent.WeeklyDescription>
          <strong>playlist</strong>
          <h2>{weekly_discover?.name}</h2>
          <p>{weekly_discover?.description}</p>
          <span>
            Spotify
            <small>
              {" "}
              <FiberManualRecordIcon />{" "}
              {test({ likes: weekly_discover?.followers?.total })} Likes{" "}
              <FiberManualRecordIcon /> {weekly_discover?.tracks?.total} Songs
            </small>{" "}
          </span>
        </SpotifyBodyComponent.WeeklyDescription>
      </SpotifyBodyComponent.WeeklyContainer>
      <SpotifyBodyComponent.SongPlaylist>
        <SpotifyBodyComponent.SongIcon>
          <SpotifyBodyComponent.SongListIcon>
            <span>
              <PlayCircleFilledIcon />
            </span>
          </SpotifyBodyComponent.SongListIcon>
          <SpotifyBodyComponent.SongListIcon>
            <FavoriteBorderIcon />
          </SpotifyBodyComponent.SongListIcon>
          <SpotifyBodyComponent.SongListIcon>
            <MoreHorizIcon />
          </SpotifyBodyComponent.SongListIcon>
        </SpotifyBodyComponent.SongIcon>
      </SpotifyBodyComponent.SongPlaylist>
      <SpotifyBodyComponent.ListOfSong>
        <SpotifyBodyComponent.First>#</SpotifyBodyComponent.First>
        <SpotifyBodyComponent.Second>TITLE</SpotifyBodyComponent.Second>
        <SpotifyBodyComponent.Third>ALBUM</SpotifyBodyComponent.Third>
        <SpotifyBodyComponent.Fourth>DATE ADDED</SpotifyBodyComponent.Fourth>
        <SpotifyBodyComponent.Fifth>
          <ScheduleIcon />
        </SpotifyBodyComponent.Fifth>
      </SpotifyBodyComponent.ListOfSong>
      <hr style={{ width: "100%" }} />
      {weekly_discover?.tracks?.items?.map((e, index = 0) => {
        window.addEventListener("load", () => {
          if (_test.length <= 20) {
            _test.push({
              id: index + 1,
              track_link: "https://api.spotify.com/v1/tracks/" + e?.track?.id,
              song_name: e?.track?.name,
              artist: e?.track?.artists
                ?.map((artist) => artist?.name)
                .join(","),
              image: e?.track?.album?.images[0]?.url,
              alt: e?.track?.album?.name,
            });
            settest(_test);
          }
        });
        return (
          <SongRow
            track={e.track}
            songID={_test}
            count={index + 1}
            key={e.track.id}
            date={e.added_at}
            pressed={pressed}
          />
        );
      })}
    </SpotifyBodyComponent>
  );
}
