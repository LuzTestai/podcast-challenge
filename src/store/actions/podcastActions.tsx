import { fetchPodcastStart, fetchPodcastSuccess, fetchPodcastFailure } from '../slices/podcastSlice';

export const fetchPodcast = () => {
  return async (dispatch) => {
    dispatch(fetchPodcastStart());
    try {
      const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
      const data = await response.json();
      dispatch(fetchPodcastSuccess(data.feed));
    } catch (error) {
      dispatch(fetchPodcastFailure(error.message));
    }
  };
};
