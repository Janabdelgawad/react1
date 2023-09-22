import styles from "../App.module.scss";
import HeartIcon from "../assets/Icons/HeartIcon";
const Post = ({
  id,
  profilePicture,
  name,
  postImage,
  likes,
  postDescription,
  tags,
  comments,
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={profilePicture} alt="user" width={30} height={30} />
        <span>{name}</span>
        <div className={styles.buttonsContainer}>
          <button>Details</button>
          <button>Delete</button>
        </div>
      </div>
      <div className={styles.postBody}>
        <img src={postImage} alt="post" width={385} height={300} />
        <div className={styles.postContent}>
          <div>
              <span>
                <HeartIcon />
              </span>
              <span>{likes} likes</span>
          </div>
          <p>{postDescription}</p>
          <div className={styles.tags}>
            {tags.split(" ").map((tag, index) => (
              <span key={index}>#{tag}</span>
            ))}
          </div>
          <div className={styles.comments}>view {comments} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
