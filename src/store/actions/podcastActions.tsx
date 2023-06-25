import { RootState } from '../../store';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';
import { fetchPodcastStart, fetchPodcastSuccess, fetchPodcastFailure } from '../slices/podcastSlice';

export const fetchPodcast = (): ThunkAction<void, RootState, null, AnyAction> => {
  return async (dispatch: any) => {
    dispatch(fetchPodcastStart());
    try {
      const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
      const data = await response.json();
      dispatch(fetchPodcastSuccess(data.feed.entry));
    } catch (error) {
      dispatch(fetchPodcastFailure(error.message));
    }
  };
};


