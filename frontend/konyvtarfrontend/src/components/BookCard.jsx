import PropTypes from "prop-types";

/**
 * Könyv adatait megjelenítő kártya
 * @param {object} props A kártya tulajdonsága: megjelenő hirdetés
 * @returns A kártya komponens
 */
function BookCard(props) {
  const { book, rentClick } = props;
  const backendURL = "http://localhost:8000/";
  return (
    <div className="col">
      <div className="card h100">
        {book.image ? (
          <img
            className="card-image-top"
            src={backendURL + book.image}
            alt={book.title}
          />
        ) : (
          ""
        )}
        <div className="card-body">
          <h4>{book.title}</h4>
          <h5>{book.author}</h5>
          <p>Kiadási év: {book.publish_year}</p>
          <p>Hoassz: {book.page_count} oldal</p>
          <img src={`public/image/${book.author}.jpg`} alt={book.author} />
        </div>
        <div className="card-footer">
          <div className="d-grid gap-1">
            <button className="btn btn-primary" onClick={()=>{rentClick(book.id)}}>Kölcsönzés</button>
          </div>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  rentClick: PropTypes.func.isRequired,
};

export default BookCard;