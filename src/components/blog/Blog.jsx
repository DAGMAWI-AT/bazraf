import React, {useEffect} from 'react'
import './blog.css'
import Headerb from './b-header'
import Post from './posts'
import Sidebar from './sidebar'
import img from "../images/max_vygoda-up.jpg"
import BackBlog from "./b-header"
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <> 
    <div>
    <BackBlog   title='Welcome To Our BLOG'  cover={img} />          
    <div className="home">
        <Post />
        {/* <Sidebar /> */}
      </div>

      </div>



    </>
  )
}

export default Blog

