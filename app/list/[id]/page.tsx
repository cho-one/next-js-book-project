import { Suspense } from "react";
import styles from "../../../styles/detail.module.css";
import BookList from "../../../components/book-list";

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {params.id.replace(/-/g, " ").toUpperCase()}
      </h1>
      <Suspense fallback={<p>Loading books...</p>}>
        <BookList id={params.id} />
      </Suspense>
    </div>
  );
}
