import "./Book.css";
export default function Book({ book }) {
  console.log(book);
  const { name, price } = book;
  return (
    <div className="book">
      {/* <h3>Book name: {book.name}</h3> */}
      <h3>Book name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  );
}
