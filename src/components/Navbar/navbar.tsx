import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
return (
    <div className={styles.navbar}>
        <h1 className={styles.title}>Podcaster</h1>
        <p className={styles.descripción}>Descripción</p>
    </div>
    )
}

export default Navbar;