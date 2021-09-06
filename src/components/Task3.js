import React, { useState, useEffect }from "react";

export default function Task3() {

  const [books, setBooks] = useState();

  useEffect(() => {
    getData();

    // async to get data
    async function getData() {
      const response = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await response.json();

      // store the data into books
      setBooks(data) ;
    }
  }, []);

  return (
    <div>

  </div>
  );
}
  //   <h1>Task 3</h1>

  //   {/* display books from the API */}
  //   {books && (
  //     <div className="books">

  //       {/* loop over the books */}
  //       {books.map((book, index) => (
  //         <div key={index}>
  //           <p>{book.name}</p>
  //         </div>
  //       ))}

  //     </div>
  //   )}