import { Metadata } from "next";
import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";

export const metadata: Metadata = {
    title: "MyTop - наш лучший топ",
    description: "bla bla bla"
};

export default async function Home() {
    return (
        <main className={styles.main}>
            <Htag tag="h1">Main page</Htag>
            <Input placeholder="test" />
            <Textarea />
        </main>
    );
}
