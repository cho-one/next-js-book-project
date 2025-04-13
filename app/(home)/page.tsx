import { Suspense } from "react";
import styles from "../../styles/home.module.css";

import Categoryies from "../../components/book-categories";

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <Suspense fallback={<h1>Loading best seller...</h1>}>
        <Categoryies />
      </Suspense>
    </div>
  );
}
