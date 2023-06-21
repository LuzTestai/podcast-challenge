import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail/cardDetail';
import { fetchPodcastForId } from '../../store/actions/podcastDetailActions';
import { useDispatch, useSelector } from 'react-redux';

const DetailPodcast = () => {
    const dispatch = useDispatch();
    const { podcastDetail, loading, error } = useSelector((state: any) => state.podcastDetail);
    const { id} = useParams();

    useEffect(() => {
        console.log({podcastDetail})
    },[podcastDetail])
    
    useEffect(() => {
        id && dispatch(fetchPodcastForId(id)) && console.log('HICE EL FETCH')
      }, [dispatch,id]);

    console.log({id})
    return (
        <div>
            <CardDetail />
        </div>
    )
}

export default DetailPodcast;