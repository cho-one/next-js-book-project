"use client";
import Link from "next/link";
import styles from "../styles/layout.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </div>
  );
}
