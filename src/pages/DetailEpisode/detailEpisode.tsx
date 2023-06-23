import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import CardEpisode from '../../components/CardEpisode/cardEpisode';
import { useSelector } from 'react-redux';

const DetailEpisode = () => {
    const navigate = useNavigate();
    const {authorDetail,  detailEpisode, loading, error } = useSelector((state: any) => state.podcastDetail);
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
                <div>
                <p>Hubo un error, porfavor vuelve a intentarlo</p>
                <button onClick={() => navigate('/')}>Volver a intentarlo</button>
            </div>
            :    
            <CardEpisode
            title={authorDetail.title}
            author={authorDetail.author}
            description={authorDetail.description}
            image={authorDetail.image}
            titleEpisode={detailEpisode.title}
            descriptionEpisode={detailEpisode.description}
            audio={detailEpisode.enclosure}
            />
        }
        </div>
    )
}

export default DetailEpisode;