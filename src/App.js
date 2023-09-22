import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;


































// import styles from "./App.module.scss";
// import Post from "./components/Post";
// import FixedContainer from "./components/FixedContainer";
// import { posts } from "./constant/posts";
// import Header from "./components/Header";
// function App() {
//   return (
//     <main className={styles.main}>
//       <Header />
//       <div className={styles.postsContainer}>
//         {posts.map((post) => (
//           <Post
//             key={post.id}
//             id={post.id}
//             profilePicture={post.profilePicture}
//             name={post.name}
//             postImage={post.postImage}
//             likes={post.likes}
//             postDescription={post.postDescription}
//             tags={post.tags}
//             comments={post.comments}
//           />
//         ))}
//       </div>
//       <FixedContainer />
//     </main>
//   );
// }

// export default App;
