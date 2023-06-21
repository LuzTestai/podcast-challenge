import styles from "./cardProduct.module.css";
import { Link } from 'react-router-dom';
import { cortarStrPorGuionOComa } from '../../utils';

const CardProduct = ({title, autor, image, id }) => {
    return (
        <div>
             <Link to={`/podcast/${id}`} className={styles.linkUnstyled}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image} alt="Imagen de la tarjeta"/>
                </div>
                    <h2 className={styles.title}>{cortarStrPorGuionOComa(title)}</h2>
                    <p className={styles.description}>{autor}</p>
            </div>
            </Link>
        </div>
    )
}

export default CardProduct;