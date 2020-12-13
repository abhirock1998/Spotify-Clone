// eslint-disable-next-line
export const authPoint = "https://accounts.spotify.com/authorize";

const redirectUri =
  process.env.NODE_ENV === "production"
    ? "https://spotify-28b81.firebaseapp.com/"
    : "http://localhost:3000/";
const clientId = "cc96896b1c2e4ff98d33ff68da337d8f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// http://localhost:3000/#access_token=BQBwUKAjyzbnBd4Vp3EkN6h4pm3epiHoNNm4_yL0JheHL-2bJNnNZVYMVNny-VObse6kWQW8fFgCQI84zVpCzQoazNw1X09JCLFHBbNlyUl0vODhBpn1-r8QhTPBcFOBcqrbhHURAsubdpd3gDroTqfJ0BaLDWkD_iLhigkjADRdLcCD&token_type=Bearer&expires_in=3600

export const loginUrl =
  authPoint +
  "?client_id=" +
  clientId +
  "&redirect_uri=" +
  redirectUri +
  "&scope=" +
  scopes.join("%20") +
  "&response_type=token&show_dialog=true";
