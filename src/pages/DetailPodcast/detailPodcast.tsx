import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardDetail from '../../components/CardDetail/cardDetail';
import { fetchEpisodeDetail, fetchPodcastForId } from '../../store/actions/podcastDetailActions';
import { useDispatch, useSelector } from 'react-redux';

const DetailPodcast = ({setLoading}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {authorDetail, podcastDetail, loading, error } = useSelector((state: any) => state.podcastDetail);
    const { name} = useParams();
    
    useEffect(() => {
        setLoading(loading)
    },[loading])
    useEffect(() => {
        if(Object.keys(authorDetail).length === 0 && !loading){
            navigate('/')
        }
    },[authorDetail])

    useEffect(() => {
        name && dispatch(fetchPodcastForId(name))
      }, [dispatch,name]);
      
      
    const hiceClick = (pod) => {
        dispatch(fetchEpisodeDetail(pod.feedUrl))
        navigate('/episode')
    }

    return (
        <div>
            <CardDetail
            hiceClick={hiceClick}
            title={authorDetail.title}
            author={authorDetail.author}
            description={authorDetail.description}
            episodes={podcastDetail.length}
            podcastDetail={podcastDetail}
            image={authorDetail.image}
            />
        </div>
    )
}

export default DetailPodcast;