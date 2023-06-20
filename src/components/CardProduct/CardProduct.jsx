import styles from "./cardProduct.module.css";

const CardProduct = () => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src="ruta_de_la_imagen.jpg" alt="Imagen de la tarjeta"/>
                </div>
                    <h2 className={styles.title}>Título de la tarjeta</h2>
                    <p className={styles.description}>Descripción de la tarjeta</p>
            </div>
        </div>
    )
}

export default CardProduct;