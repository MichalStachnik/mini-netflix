import styles from '@/app/styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Mini netflix</h1>
      <sub>
        netflix, but <span>smaller</span>
      </sub>
    </header>
  );
};

export default Header;
