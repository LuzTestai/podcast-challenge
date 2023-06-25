import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPodcast } from '../../store/actions/podcastActions';
import CardProduct from '../../components/CardProduct/CardProduct';
import Loading from '../../components/Loading';
import styles from "./homePage.module.css";
import { fillAuthorDetail } from '../../store/slices/detailPodcast';
import { cortarStrPorGuionOComa } from '../../utils';
import { RootState } from '../../store';
import Error from '../../components/Error';

const HomePage = ({setLoading}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { podcasts, loading, error } = useSelector((state: RootState) => state.podcasts);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
      setLoading(loading)
  },[loading])
  
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

    const handleFilterChange = (event) => {
      setFilterValue(event.target.value);
    };

    const filteredPodcasts = podcasts.filter((podcast) => {
      const filterText = filterValue.toLowerCase();
      const title = podcast.title.label.toLowerCase();
      const artist = podcast['im:artist'].label.toLowerCase();
      return title.startsWith(filterText) || artist.startsWith(filterText);
    });
    

  return (
    <>
    {loading
    ? <Loading />
    : error
    ? <Error navigate={navigate('/')} /> :
        podcasts?.length > 0 && !loading ?
        <div className={styles.container}>
              <div className={styles.filter}>
                <div className={styles.badge}>{filteredPodcasts.length}</div>
                    <input
                      type="text"
                      value={filterValue}
                      onChange={handleFilterChange}
                      placeholder="Filter by title or artist"
                      className={styles.filterInput}
                    />
                </div>
          <div className={styles.containerHome}>
           

            {filteredPodcasts.map((podcast) => {
                return (
                  <div key={podcast.title.label} onClick={() => handleLinkClick(podcast)} className={styles.clickPodcast}>
                    <CardProduct 
                    title={podcast.title.label}
                    autor={podcast['im:artist'].label}
                    image={podcast['im:image'][1].label}
                    />
                        </div>
                )
            })}
      </div>
      </div>
      : <p>No hay podcast por el momento</p>
    }
    </>
  );
};

export default HomePage;