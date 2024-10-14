import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "MyTop - наш лучший топ",
    description: "bla bla bla"
};

export default function Home() {
    return <main className={styles.main}>Main page</main>;
}
