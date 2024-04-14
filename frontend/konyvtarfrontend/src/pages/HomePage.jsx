import { useEffect, useState } from "react";
import BookList from "../components/BookList";

function HomePage() {
    const apiUrl = "http://localhost:8000/api";
    const [books, setBooks] = useState(null);
  
    useEffect(() => {
      async function loadBooks() {
        const response = await fetch(apiUrl + "/books");
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        }
      }
      loadBooks();
    }, [apiUrl]);
  
    return (
      <>
        <h1>Petrik Könyvtár Nyilvántartó</h1>
        {books ? (
          listBooks(books)
        ) : (
          <h2 className="text-center">Adatok betöltése folyamatban...</h2>
        )}
      </>
    );
  }
  
  function listBooks(books) {
    return books.length > 0 ? (
      <BookList books={books} />
    ) : (
      <p>Még nincs felvéve könyv</p>
    );
  }
  
  export default HomePage;