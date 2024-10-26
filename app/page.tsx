import { Metadata } from "next";
import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";

export const metadata: Metadata = {
    title: "MyTop - наш лучший топ",
    description: "bla bla bla"
};

export default async function Home() {
    return (
        <main className={styles.main}>
            <Htag tag="h1">Main page</Htag>
        </main>
    );
}
