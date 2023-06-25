import React, { useEffect } from 'react';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({loading}) => {
    const navigate = useNavigate();

return (
    <div className={styles.navbar}>
        <h1 className={styles.title} onClick={() => navigate('/')} >Podcaster</h1>
        {loading &&  <div className={styles.spinnerNavbar}> </div>}
    </div>
    )
}

export default Navbar;