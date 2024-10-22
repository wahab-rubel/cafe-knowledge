


import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import { useState } from 'react'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

const handleAddToBookmark = blog => {
  const newBookmarks = [...bookMarks, blog];
  setBookMarks(newBookmarks)
}

const handleMarkAsRead = (id, time) =>{
  setReadingTime((prevReadingTime) => prevReadingTime + time)
  // Remove this  read blog
// console.log('remove bookmark', id)
const remainingBookmarks = bookMarks.filter(bookMark => bookMark.id !== id);
setBookMarks(remainingBookmarks)
}

  return (
    <>
      
    <Header></Header>
   <div className='md:flex max-w-7xl mx-auto'>
   <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
   <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
   </div>
      
    </>
  )
}

export default App







// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   const handleButtonClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <ChildComponent onButtonClick={handleButtonClick} />
//   );
// }

// function ChildComponent({ onButtonClick }) {
//   return (
//     <button onClick={onButtonClick}>Click me</button>
//   );
// }


// 2. import { useEffect, useState } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button   
//  onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
