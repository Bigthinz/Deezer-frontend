import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Track {
  id: string;
  title: string;

}

interface DeezerState {
  tracks: Track[];

}

const initialState: DeezerState = {
  tracks: [],

};

const deezerSlice = createSlice({
  name: 'deezer',
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
   
  },
});

export const { setTracks, setSearchResults } = deezerSlice.actions;
export default deezerSlice.reducer;

