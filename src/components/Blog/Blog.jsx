import PropTypes from "prop-types"
import { IoBookOutline } from "react-icons/io5";

function Blog({id, blog, handleAddToBookmark, handleMarkAsRead}) {
 const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
  return (
    <div className="mb-20 space-y-4 ">
     <img className="w-full mb-4 rounded-3xl" src={cover} alt={`cover picture of the title ${title}`}/>
     <div className="flex justify-between mb-4">
      <div className="flex">
        <img className="w-16 h-16 p-4 rounded-full" src={author_img} alt="" />
      <div className="ml-6">
        <h3 className="text-2xl">{author}</h3>
        <p>{posted_date}</p>
     </div>
      </div>
      <div className="flex justify-between">
     <span>{reading_time} read
      <button onClick={() => handleAddToBookmark(blog)} 
      className="ml-2 text-red-600 flex items-center justify-center">
        <IoBookOutline />
      </button>
     </span>
     </div>
    </div>
    <h2 className="text-4xl">{title}</h2>
    <p>
      {
        hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
      }
    </p>
    <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-900 font-extrabold underline">Mark As Read</button>
    </div>
  )
};

Blog.propTypes = {
 blog: PropTypes.object.isRequired,
 handleAddToBookmark: PropTypes.func,
 handleMarkAsRead: PropTypes.func
}

export default Blog

