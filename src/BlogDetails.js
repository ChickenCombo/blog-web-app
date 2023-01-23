import useFetch from './useFetch';
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      <br />
      { error && <div>{error}</div> }
      { isPending && <div>Loading...</div> }
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}
export default BlogDetails
