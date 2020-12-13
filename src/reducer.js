export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDKC20FalkBgVvQCSP9SsMnLUeRU_h0U2MPxbB4DJuxHM5UM3RX5TzCNHg1Ek1-EOoJ5nh9mfFT2d0zriYwxcybslNh",
};

export default function reducer(state, action) {
  

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return { ...state, tokenDispatch: action.token };

    case "SET_PLAYLIST":
      return {
        ...state,
        userPlaylist: action.playlist,
      };
    case "SET_WEEKLY":
      return {
        ...state,
        weekly_discover: action.weekly,
      };
    case "SET_TRACKLINK":
      return {
        ...state,
        track_link: action.link,
      };
    
    default:
      return state;
  }
}
