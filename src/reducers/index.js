import { combineReducers } from "redux";

// Song reducer shows static list of songs
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarana", duration: "3:15" },
    { title: "All Star", duration: "4:20" },
    { title: "Strobe", duration: "6:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    // action testing - test if user selects new song
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
