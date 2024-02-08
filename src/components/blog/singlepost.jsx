import { Link } from "react-router-dom";
import React ,{useEffect, useState}from "react"
import "./singlepost.css";
import Posts from "./posts";
import Headerb from "./b-header";
import img from "../images/blog.jpg"
import Back from "../common/Back"
import { useParams, useHistory,useNavigate} from 'react-router-dom';
import { postData } from '../data/Data';
import BackBlog from "./b-header"


export default function Singlepost() {
  const { id } = useParams();
  const post = postData.find((p) => p.id === parseInt(id));
  const history= useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPosts, setSearchedPosts] = useState([]);
    useEffect(() => {
    // const handleHashChange = () => {
      window.scrollTo(1, 1);
    // };

    // window.addEventListener('hashchange', handleHashChange);

    // return () => {
    //   window.removeEventListener('hashchange', handleHashChange);
    // };
  }, [id]);
  // const { id } = useParams();

  if (!post) {
    return <div>Post not found</div>;
  }

  
const handleSearchClick = () => {
  // Filter blog posts based on the search term
  const filteredPosts = postData.filter((filteredPost) =>
    filteredPost.ttl && filteredPost.ttl.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setSearchedPosts(filteredPosts);
};
  return (
    <>
      <div className="singlBnn">
        <BackBlog title='DETAIL BLOG' cover={img} />
      </div>

      <Link className="backto" type="button" to='/blog'>
        Back to Blog
      </Link>

      <div className="mainContainer">
        {/* singlePostWrapper takes up 60% of the screen on the left */}
        <div className="singlePostWrapper">
          {post.img && <img className="singlePostImg" src={post.img} alt="" />}
          <h1>{post.ttl}</h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  Dagmawi
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p>{post.dsc}</p>
        </div>

        {/* rightSection with search and recent blogs takes up 40% on the right */}
        <div className="rightSection">
          {/* Add your blog search component here */}
          <div className="blogSearch">
            <h2>Blog Search</h2>
            {/* Search input and button */}
            <div className="searchContainer">
          <input
            type="text"
            placeholder="Search Blogs"
            className="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="searchButton"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
          </div>

          <div className="recentBlogs">
          <h2>Search Results</h2>
          {searchedPosts.map((filteredPost) => (
            <Link key={filteredPost.id} to={`/blog/singlepost/{filteredPost.id}`} className="recentPostLink">
              <ul>
                <li>{filteredPost.ttl}</li>
              </ul>
            </Link>
          ))}
        </div>

        <div className="recentBlogs">
        <h2>Recent Blogs</h2>
        {postData.slice( 5, ).map((recentPost) => (
          <Link key={recentPost.id} to={`/blog/singlepost/${recentPost.id}`} className="recentPostLink">
         <ul>
          <li>
            {recentPost.ttl}
            </li>
            </ul>
          </Link>
        ))}
      </div>
        </div>
      </div>

      <Posts />
    </>
  );
}





