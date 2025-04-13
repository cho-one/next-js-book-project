import styles from "../styles/detail.module.css";

async function getBooks(listNameEncoded: string) {
  const res = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${listNameEncoded}`
  );
  const data = await res.json();
  return data.results;
}

export default async function BookList({ id }: { id: string }) {
  const result = await getBooks(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {result.display_name.replace(/-/g, " ").toUpperCase()}
      </h1>

      <div className={styles.grid}>
        {result.books.map((book: any) => (
          <div className={styles.card} key={book.primary_isbn13}>
            <img
              src={book.book_image}
              alt={book.title}
              className={styles.cover}
            />
            <p className={styles.bookTitle}>{book.title}</p>
            <p className={styles.author}>{book.author}</p>
            <a
              href={book.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buy}
            >
              Buy now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
