import styles from "./cardProduct.module.css";

import { cortarStrPorGuionOComa } from '../../utils';

const CardProduct = ({title, autor, image }) => {
    return (
        <div>
            
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image} alt="Imagen de la tarjeta"/>
                </div>
                    <h2 className={styles.title}>{cortarStrPorGuionOComa(title)}</h2>
                    <p className={styles.description}>{autor}</p>
            </div>
        
        </div>
    )
}

export default CardProduct;