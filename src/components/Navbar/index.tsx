<<<<<<< HEAD
import Link from 'next/link';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navLeft}>
        <GiHamburgerMenu size={30} style={{ color: '#15feeb' }} />
      </div>
      <div className={styles.navCenter}>
        <input
          type='text'
          className={styles.navbarInput}
          placeholder='Search...'
        />
      </div>
      <div className={styles.navRight}></div>
    </div>
  );
};

export default Navbar;
=======
import {useState} from "react";
import NavContent from "./NavContent";

const Navbar = () => {
    const [isToggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle((toggle) => !toggle);
    };

    return (
        <nav className={`navbar ${isToggle ? "is-toggle" : ""} p-6`}>
            <div className="navbar-burger js-navbar-burger " onClick={handleToggle}>
                <i className="ic-menu icon "> icon </i>
            </div>
            {isToggle ? <NavContent /> : null}
        </nav>
    );
};

export default Navbar;
>>>>>>> 359f6a667e06a6eda6087b3e0d6e02413e942209
