// eslint-disable-next-line
import React from "react";
import { SongViewer } from "../component";

export default function SongContainer({ track, date, count, pressed }) {
  const datetoUTC = ({ date }) => {
    var list = [
      "Jan",
      "feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var tremove = date.substring(0, 10);
    var newDate = new Date(tremove);
    var format =
      list[newDate.getMonth()] +
      " " +
      newDate.getDate() +
      " , " +
      newDate.getUTCFullYear();
    return format;
  };

  function millisToMinutes({ time }) {
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <SongViewer
      ontap={() =>
        pressed(
          track.id,
          track.album.images[0].url,
          track.artists.map((artist) => artist.name).join(","),
          track.name,
          track.uri
        )
      }
    >
      <SongViewer.SerialNumber>
        {count.length >= 2 ? count :` ${count}`}
      </SongViewer.SerialNumber>

      <SongViewer.SongDetails key={track.id}>
        <img src={track.album.images[0].url} alt={track.album.name} />
        <div>
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(",")} -{""}
            {track?.album?.name}{" "}
          </p>
          <small id="track">{track.id}</small>
        </div>
      </SongViewer.SongDetails>
      <SongViewer.AlbumName>{track?.album?.name}</SongViewer.AlbumName>
      <SongViewer.DateAdded>{datetoUTC({ date: date })}</SongViewer.DateAdded>
      <SongViewer.SongLength>
        {millisToMinutes({ time: track.duration_ms })}
      </SongViewer.SongLength>
    </SongViewer>
  );
}
