import React from "react";
import styles from './cardEpisode.module.css';

const CardDetail = ({title, author, description, titleEpisode, image, descriptionEpisode, audio}) => {
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
                <div className={styles.containerDescription}>
                <div>
                    <h2>{titleEpisode}</h2>
                </div>
                <div>
               
                    <p>{descriptionEpisode} </p>
                    <div>
                        <audio controls className={styles.audio}>
                            <source src={audio} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                    </div>
                    
                </div> 
                </div>
            
            </div>
      </div>
      
    )
}

export default CardDetail;