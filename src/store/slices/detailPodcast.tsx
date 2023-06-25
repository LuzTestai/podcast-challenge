import { createSlice } from '@reduxjs/toolkit';

const podcastDetailSlice = createSlice({
  name: 'podcastDetail',
  initialState: {
    podcastDetail: [],
    authorDetail: {},
    detailEpisode: {},
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
    fillAuthorDetail(state, action) {
      state.authorDetail = action.payload;
      state.loading = false;
    },
    fetchEpisodeDetailtStart(state) {
      state.loading = true;
      state.error = null;
    },
    fillDetailEpisode(state, action) {
      state.detailEpisode = action.payload;
      state.loading = false;
    },
    fetchEpisodeDetailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPodcasDetailtStart,
  fetchPodcasDetailtSuccess,
  fetchPodcastDetailFailure,
  fillAuthorDetail,
  fillDetailEpisode,
  fetchEpisodeDetailFailure
} = podcastDetailSlice.actions;

export default podcastDetailSlice;
