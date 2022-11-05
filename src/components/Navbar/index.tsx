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
