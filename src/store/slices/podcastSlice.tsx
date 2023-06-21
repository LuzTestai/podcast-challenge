import { createSlice } from '@reduxjs/toolkit';

const podcastSlice = createSlice({
  name: 'podcasts',
  initialState: {
    podcasts: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPodcastStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPodcastSuccess(state, action) {
      state.loading = false;
      state.podcasts = action.payload;
    },
    fetchPodcastFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPodcastStart,
  fetchPodcastSuccess,
  fetchPodcastFailure,
} = podcastSlice.actions;

export default podcastSlice;
