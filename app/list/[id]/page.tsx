import { Suspense } from "react";
import styles from "../../../styles/detail.module.css";
import BookList from "../../../components/book-list";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <div>
      <Suspense fallback={<p>Loading books...</p>}>
        <BookList id={id} />
      </Suspense>
    </div>
  );
}
