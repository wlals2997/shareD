import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/Header.module.css'
import shareD_logo from '../../data/logo.JPG'
function Header (){
    return(
        <div className={styles.header} >
            <div className={styles.icon}>
                <img src={shareD_logo} alt="Logo" className={styles.logo}></img>
            </div>
            <div className={styles.menu}>
            <Link to="/">
                <button className={styles.menuBtn}>Home</button>
            </Link>
            <Link to="/Select">
                <button className={styles.menuBtn}>Matching</button>
            </Link>
            </div>
        </div>
       
    )
}
export default Header;