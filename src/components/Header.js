import styles from "../App.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Social Media Demo</h1>
      <ul>
        <li>
          <a href="?">Home</a>
        </li>
        <li>
          <a href="?">Fav</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
