import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPodcast } from '../../store/actions/podcastActions';
import CardProduct from '../../components/CardProduct/CardProduct';
import styles from "./homePage.module.css";
import { fillAuthorDetail } from '../../store/slices/detailPodcast';
import { cortarStrPorGuionOComa } from '../../utils';
interface PodcastState {
    podcasts: any[];
    loading: boolean;
    error: string | null;
  }

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { podcasts, loading, error } = useSelector((state: PodcastState) => state.podcasts);
  
    useEffect(() => {
      dispatch(fetchPodcast());
    }, [dispatch]);

    const handleLinkClick = (podcast) => {
      const authorData = {
        author: podcast['im:artist'].label,
        title: cortarStrPorGuionOComa(podcast.title.label),
        description: podcast.summary.label,
        image: podcast['im:image'][2].label,
      }
      dispatch(fillAuthorDetail(authorData))
      navigate(`/podcast/${podcast['im:name'].label}`);
    };
  
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
          <div onClick={() => handleLinkClick(podcast)} className={styles.clickPodcast}>
            <CardProduct 
            title={podcast.title.label}
            autor={podcast['im:artist'].label}
            image={podcast['im:image'][1].label}
            />
                </div>
        )
    })}
    </div>
    : <p>No hay podcast por el momento</p>
    	}
    </>
  );
};

export default HomePage;