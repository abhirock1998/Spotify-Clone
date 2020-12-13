import "./App.css";
import { Home, Player } from "./pages/index";
import { useEffect } from "react";
import { getTokenFromURl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./data-layer";

const spotify = new SpotifyWebApi();
export default function App() {
  const [
    { user, tokenDispatch, userPlaylist, weekly_discover },
    dispatch,
  ] = useDataLayerValue();

  useEffect(() => {
    const token = getTokenFromURl();
    window.location.hash = "";
    const access_token = token.access_token;
    if (access_token) {
      dispatch({ type: "SET_TOKEN", token: access_token });

      spotify.setAccessToken(access_token);

      spotify
        .getMe()
        .then((user) => {
          dispatch({ type: "SET_USER", user: user });
        })
        .catch((e) => {
          console.log("Error has Occur =>>>>>", e);
        });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({ type: "SET_PLAYLIST", playlist: playlist });
      });

      spotify.getPlaylist("37i9dQZF1DX4zbZrYRGVam").then((response) => {
        dispatch({ type: "SET_WEEKLY", weekly: response });
      });
    }
  }, [user, tokenDispatch, dispatch, userPlaylist, weekly_discover]);

  return tokenDispatch ? (
    <Player spotify={spotify} weekly={weekly_discover} />
  ) : (
    <Home />
  );
}
