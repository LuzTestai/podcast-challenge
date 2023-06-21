import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcast } from '../../store/actions/podcastActions';
import CardProduct from '../../components/CardProduct/CardProduct';
import styles from "./homePage.module.css";
interface PodcastState {
    podcasts: any[];
    loading: boolean;
    error: string | null;
  }

const HomePage = () => {
    const dispatch = useDispatch();
    const { podcasts, loading, error } = useSelector((state: PodcastState) => state.podcasts);
  
    useEffect(() => {
      dispatch(fetchPodcast());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  return (
    <>
    {podcasts?.entry?.length > 0 && !loading ?
    <div className={styles.containerHome}>
    {podcasts.entry.map((podcast) => {
        console.log(podcast)
        return (
            <CardProduct 
            id={podcast.id.attributes['im:id']}
            title={podcast.title.label}
            autor={podcast['im:artist'].label}
            image={podcast['im:image'][1].label}
            />
        )
    })}
    </div>
    : <p>No hay podcast por el momento</p>
    	}
    </>
  );
};

export default HomePage;