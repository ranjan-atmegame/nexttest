import styles from "./page.module.css";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <CategoryList />
    </main>
  );
}
