import { fetchPodcasDetailtStart, fetchPodcasDetailtSuccess, fetchPodcastDetailFailure } from '../slices/detailPodcast';

// export const fetchPodcastForId = (podcastId) => {
//     console.log('entre al fetch', podcastId)
//   return async (dispatch) => {
//     dispatch(fetchPodcasDetailtStart());
//     try {
//       const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
//       const data = await response.json();
//       dispatch(fetchPodcasDetailtSuccess(data));
//     } catch (error) {
//       dispatch(fetchPodcastDetailFailure(error.message));
//     }
//   };
// };

export const fetchPodcastForId = (podcastId) => {
    return async (dispatch) => {
      dispatch(fetchPodcasDetailtStart());
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
        const textData = await response.text();
        const jsonData = JSON.parse(textData);
        dispatch(fetchPodcasDetailtSuccess(jsonData));
      } catch (error) {
        dispatch(fetchPodcastDetailFailure(error.message));
      }
    };
  };
  
