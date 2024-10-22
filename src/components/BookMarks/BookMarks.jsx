
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark'

function BookMarks({bookMarks, readingTime}) {
  return (
    <div className="md:w-1/3 bg-gray-200 m-2 rounded-lg mt-6">
      <div>
        <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
      </div>
      <h1 className="text-2xl text-center p-4 bg-red-200 m-2 rounded-lg text-blue-600">BookMarked Blogs: {bookMarks.length}</h1>
      {
        bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
      }
    </div>
  )
}

BookMarks.propTypes = {
bookMarks: PropTypes.array,
readingTime: PropTypes.number
}

export default BookMarks

