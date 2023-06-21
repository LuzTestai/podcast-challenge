import { createSlice } from '@reduxjs/toolkit';

const podcastDetailSlice = createSlice({
  name: 'podcastDetail',
  initialState: {
    podcastDetail: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPodcasDetailtStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPodcasDetailtSuccess(state, action) {
      state.loading = false;
      state.podcastDetail = action.payload;
    },
    fetchPodcastDetailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPodcasDetailtStart,
  fetchPodcasDetailtSuccess,
  fetchPodcastDetailFailure,
} = podcastDetailSlice.actions;

export default podcastDetailSlice;
