import styles from "../../styles/home.module.css";
import Link from "next/link";

const categories = [
  "business",
  "education",
  "espionage",
  "celebrities",
  "graphic-books",
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>The New York Times Best Seller Explorer</h1>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/list/${category}`}
            className={styles.category}
          >
            {category.toUpperCase()} →
          </Link>
        ))}
      </div>
    </div>
  );
}
