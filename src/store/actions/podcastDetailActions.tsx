import { fetchEpisodeDetailFailure, fetchPodcasDetailtStart, fetchPodcasDetailtSuccess, fetchPodcastDetailFailure, fillDetailEpisode } from '../slices/detailPodcast';
const baseUrl = "https://itunes.apple.com/";


export const fetchPodcastForId = (name) => {
    return async (dispatch) => {
      dispatch(fetchPodcasDetailtStart());
      try {
        const response = await fetch(`${baseUrl}/search?term=${name}&media=podcast&attribute=titleTerm&entity=podcast`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'omit'
        }
        );
          const data = await response.json();
          dispatch(fetchPodcasDetailtSuccess(data.results));
      } catch (error) {
          dispatch(fetchPodcastDetailFailure(error.message));
      }
    };
  };
  

  export const fetchEpisodeDetail = (episodeFeed) => {
    return async (dispatch) => {
      dispatch(fetchPodcasDetailtStart());
      try {
       
        const response = await fetch(`${episodeFeed}`);
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

         const firstItem = items[0];
         if (firstItem) {
          const titleElement = xmlDoc.querySelector('title');
           const firstItemDescription = firstItem.querySelector('description');
           const firstItemEnclosure = firstItem.querySelector('enclosure');
           const title = titleElement ? titleElement.textContent : '';
           const description = firstItemDescription ? firstItemDescription.textContent : '';
           const enclosure = firstItemEnclosure ? firstItemEnclosure.getAttribute('url') : '';
           dispatch(fillDetailEpisode({title, description, enclosure}))
         }
      } catch (error) {
          dispatch(fetchEpisodeDetailFailure(error.message));
      }
    };
  };
  
