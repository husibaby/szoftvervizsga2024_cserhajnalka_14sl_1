import PropTypes from "prop-types";
import BookCard from "./BookCard";

function BookList(props) {
  const { books } = props;
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
      ;
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array,
};

BookList.defaultProps = {
  books: [],
};

export default BookList;