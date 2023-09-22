const AddPost = () => {
  return (
    <form action="">
      <h3>Add Post</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>

      <div>
        <label htmlFor="profilePicture">Profile Picture</label>
        <input type="text" id="profilePicture" required />
      </div>

      <div>
        <label htmlFor="image">Post Image</label>
        <input type="text" id="image" required />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <input type="text" id="body" required />
      </div>

      <div>
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" required />
      </div>

      <div>
        <label htmlFor="likes">Likes</label>
        <input type="number" id="likes" required />
      </div>

      <div>
        <label htmlFor="comments">Comments</label>
        <input type="number" id="comments" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPost;
