import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import podcastSlice from './slices/podcastSlice';
import podcastDetailSlice from './slices/detailPodcast';

const store = configureStore({
  reducer: {
    podcasts: podcastSlice.reducer,
    podcastDetail : podcastDetailSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
