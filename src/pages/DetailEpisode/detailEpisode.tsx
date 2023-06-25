import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import CardEpisode from '../../components/CardEpisode/cardEpisode';
import { useSelector } from 'react-redux';
import styles from './detailEpisode.module.css';
import Error from '../../components/Error';

const DetailEpisode = ({setLoading}) => {
    const navigate = useNavigate();
    const {authorDetail,  detailEpisode, loading, error } = useSelector((state: any) => state.podcastDetail);

    useEffect(() => {
        setLoading(loading)
    },[loading])
    
    useEffect(() => {
        if(Object.keys(detailEpisode).length === 0 && !loading){
            navigate('/')
        }
    },[detailEpisode])

    return (
        <div>
             {
            loading ?
            <Loading /> :
                error? 
               <Error navigate={navigate('/')} />
            :    
            <div onClick={() => navigate(-1)} className={styles.cursorPointer}>
            <CardEpisode
            title={authorDetail.title}
            author={authorDetail.author}
            description={authorDetail.description}
            image={authorDetail.image}
            titleEpisode={detailEpisode.title}
            descriptionEpisode={detailEpisode.description}
            audio={detailEpisode.enclosure}
            />
            </div>
        }
        </div>
    )
}

export default DetailEpisode;