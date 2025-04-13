import Link from "next/link";
import styles from "../styles/layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
