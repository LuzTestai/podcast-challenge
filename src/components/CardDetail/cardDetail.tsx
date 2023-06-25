import React from "react";
import styles from './cardDetail.module.css';
import { convertirFecha, convertirDuracion } from '../../utils/index';

const CardDetail = ({title, author, description, episodes, podcastDetail, image, hiceClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
            <div className={styles.rectangle}>
            <div className={styles.borderBottom}>
                <img src={image ? image : ""} alt="Imagen" />
                </div> 
               <div className={styles.borderBottom}>
               <h2>{title}</h2>
               <span>by {author}</span>
               </div> 
               <div className={styles.borderBottom}>
                <p>{description}</p>
                </div> 
            </div>
            </div>
            <div className={styles.columnTwo}>
                <div className={styles.row}>
                    <h2>Episodes : {episodes}</h2>
                </div>
            <div className={styles.row}>
                <table>
                <tbody>
                    <tr>
                    <th>Título</th>
                    <th>Datos</th>
                    <th>Duración</th>
                    </tr>
                   {podcastDetail.map((pod) => {
                    return (
                        <tr  key={pod.collectionId} >
                        <td>
                        <div onClick={() => hiceClick(pod)} className={styles.linkDiv}>{pod.collectionName}</div>
                        </td>
                        <td>{convertirFecha(pod.releaseDate)}</td>
                        <td>{convertirDuracion(pod.trackTimeMillis)}</td>
                        </tr>
                    )
                   })}
                   </tbody>
                </table>

            </div>
            </div>
      </div>
      
    )
}

export default CardDetail;