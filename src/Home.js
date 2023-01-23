import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <h2>All Blogs</h2>
      { error && <div>{error}</div> }
      { isPending && <div>Loading...</div> }
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;