import { GiHamburgerMenu } from 'react-icons/gi';
import styles from './Topbar.module.css';

const Topbar = () => {
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

export default Topbar;
