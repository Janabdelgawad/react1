import styles from "../App.module.scss";
import AddPost from "./AddPost";
const FixedContainer = () => {
  return (
    <div className={styles.FixedContainer}>
      <span className={styles.leftBorder}></span>
      <AddPost />
    </div>
  );
};

export default FixedContainer;
