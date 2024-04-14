import { useRef } from "react";

function BookForm() {
  const apiUrl = "http://localhost:8000/api";
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const publish_yearRef = useRef(null);
  const page_countRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const publish_year = publish_yearRef.current.value;
    const page_count = page_countRef.current.value;

    createBook(title, author, publish_year, page_count);

  };

  const createBook = async (title, author, publish_year, page_count) => {
    const url = apiUrl + "/books";
    const bookDTO = {
      title: title,
      author: author,
      publish_year: publish_year,
      page_count: page_count,
    };
    console.log(bookDTO);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bookDTO),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      alert("Sikeres felvétel");
      clearForm();
    } else {
      const data = await response.json();
      console.error(data);
      alert(data.message);
    }
  };

  const clearForm = () => {
    titleRef.current.value = "";
    authorRef.current.value = "";
    publish_yearRef.current.value = "";
    page_countRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Új könyv felvétele</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Cím
        </label>
        <input className="form-control" type="text" id="title" ref={titleRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Szerző
        </label>
        <input className="form-control" type="text" id="author" ref={authorRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="publish_year" className="form-label">
          Kiadási év
        </label>
        <input className="form-control" type="text" id="publish_year" ref={publish_yearRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="page_count" className="form-label">
          Hossz
        </label>
        <input className="form-control" type="text" id="page_count" ref={page_countRef} />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Felvétel
        </button>
      </div>
    </form>
  );
}

export default BookForm;