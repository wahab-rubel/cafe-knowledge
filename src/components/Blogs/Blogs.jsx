import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


function Blogs ({handleAddToBookmark, handleMarkAsRead}) {
 const [blogs, setBlogs] = useState([])

 useEffect(() => {
  fetch('blogs.json')
  .then(res => res.json())
  .then(data => setBlogs(data))
 }, [])
  return (
    <div className="md:w-2/3">
      {
       blogs.map(blog =>  <Blog
       key={blog.id}
        blog={blog}
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
       ></Blog>)
      }

    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}


export default Blogs
