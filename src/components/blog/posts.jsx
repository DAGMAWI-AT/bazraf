import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useHistory,useNavigate } from "react-router-dom";
import "./post.css";
import { motion as m } from 'framer-motion';
import { postData, overview } from "../data/Data";
import "./posts.css";

export default function Posts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [postLikes, setPostLikes] = useState({});
  const [postDislikes, setPostDislikes] = useState({});
  const [postLoves, setPostLoves] = useState({});

  const handleLike = (postId) => {
    setPostLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleDislike = (postId) => {
    setPostDislikes((prevDislikes) => ({
      ...prevDislikes,
      [postId]: (prevDislikes[postId] || 0) + 1,
    }));
  };

  const handleLove = (postId) => {
    setPostLoves((prevLoves) => ({
      ...prevLoves,
      [postId]: (prevLoves[postId] || 0) + 1,
    }));
  };


  const getTimeElapsed = (postDate) => {
    const currentDate = new Date();
    const postCreationDate = new Date(postDate); // Assuming postDate is a valid date string

    const timeDifference = currentDate - postCreationDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return 'Just now';
    }
  };

  const handleDoubleClick = () => {
    // Navigate to the specified page when double-clicked
  navigate("/blog/singlepost");
  };
  const location = useLocation();
  const isSinglepostPage = location.pathname.includes('/blog/singlepost'); 
   const postsClassName = isSinglepostPage ? 'posts-singlepost' : 'posts';
  const titleContent = isSinglepostPage ? 'Related blogs' : 'Recently added blogs';
  const titleClassName = isSinglepostPage ? 'c-singlepost heading' : 'c heading';
  return (
    <>
      <div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="a"
      >

        <h1 className={titleClassName}>{titleContent}</h1>

        <div className={postsClassName}>

          {postData.map((post, index) => (
            
           

            <m.div key={post.id} onDoubleClick={handleDoubleClick} animate={{ y: "0%" }} className="post">
            <Link to={`/blog/singlepost/${post.id}`}>
              {post.img && <img className="postImg" src={post.img} alt="" />}
              <div className="postInfo">
                <span className="postTitle">{post.ttl}</span>
              </div>
              <p className="postDesc" style={{ WebkitLineClamp: post.mln }}>
                {post.dsc}
              </p>
              </Link>
              <div className="fin">
              <Link to={`/blog/singlepost/${post.id}`}>

                  <span className='r-m-b'> read more</span>
              </Link>
              
                  <span className="postDate">{getTimeElapsed(post.createdAt)}</span>
                  <div className="like-dislike-buttons">
                <span role="img" aria-label="Like" onClick={() => handleLike(post.id)} className="like-count">
                    &#x1F44D; {postLikes[post.id] || 0}
                  </span>
                  <span role="img" aria-label="Dislike" onClick={() => handleDislike(post.id)} className="dislike-count">
                    &#x1F44E; {postDislikes[post.id] || 0}
                  </span>
                 <span
                    role="img"
                    aria-label="Love"
                    onClick={() => handleLove(post.id)}
                    className={`love-count ${postLoves[post.id] ? 'clicked' : ''}`}
                  >
                    &#x2764; {postLoves[post.id] || 0}
                  </span>
                </div>
              </div>
            
            </m.div>
          
          ))}

        </div>
      </div>
    </>
  );
}
