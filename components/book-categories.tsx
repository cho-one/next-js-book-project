import styles from "../styles/home.module.css";
import Link from "next/link";

interface ListItem {
  list_name_encoded: string;
  display_name: string;
}

async function getCategories(): Promise<ListItem[]> {
  const res = await fetch("https://books-api.nomadcoders.workers.dev/lists");
  const data = await res.json();

  console.log(data);
  return data.results;
}

export default async function Categoryies() {
  const categories = await getCategories();
  return (
    <div className={styles.grid}>
      {categories.map((category) => (
        <Link
          key={category.list_name_encoded}
          href={`/list/${category.list_name_encoded}`}
          className={styles.category}
        >
          {category.display_name} →
        </Link>
      ))}
    </div>
  );
}
