import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const Navigation = () => (
    <ul className={styles.wrapper}>
        <li className={styles.navItem}>
            <NavLink exact
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/">
                twitters
            </NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/Articles">
                articles
            </NavLink>
        </li>
        <li className={styles.navItem}>
            <NavLink
            activeClassName={styles.navItemLinkActive} 
            className={styles.navItemLink} to="/Notes">
                notes
            </NavLink>
        </li>
    </ul>
);

export default Navigation;