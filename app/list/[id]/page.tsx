import styles from "../../../styles/detail.module.css";

async function getBooks(category: string) {
  const res = await fetch(`https://api.example.com/books?category=${category}`);
  return res.json();
}

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  //   const data = await getBooks(params.id);

  const data = {
    books: [
      {
        title: "Book Title 1",
        image: "https://via.placeholder.com/150",
        amazon_link: "https://www.amazon.com",
      },
      {
        title: "Book Title 2",
        image: "https://via.placeholder.com/150",
        amazon_link: "https://www.amazon.com",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>{params.id.toUpperCase()} BOOKS</h1>
      <div className={styles.grid}>
        {data.books.map((book: any) => (
          <div className={styles.card} key={book.title}>
            <img src={book.image} alt={book.title} />
            <p>{book.title}</p>
            <a
              href={book.amazon_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
