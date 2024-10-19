import { Metadata } from "next";
import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";
import { getMenu } from "@/api/menu";

export const metadata: Metadata = {
    title: "MyTop - наш лучший топ",
    description: "bla bla bla"
};

export default async function Home() {
    const menu = await getMenu(0);

    return (
        <main className={styles.main}>
            <Htag tag="h1">Main page</Htag>
            <ul>
                {menu.map(m => (
                    <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
                ))}
            </ul>
        </main>
    );
}
