import { Button } from "@/components/Button/Button";
import { Htag } from "@/components/Htag/Htag";
import { P } from "@/components/P/P";
import { Tag } from "@/components/Tag/Tag";
// import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MyTop - наш лучший топ",
    description: "bla bla bla"
};

export default function Home() {
    return (
        <>
            <Htag tag="h1">Huinya</Htag>
            <Button appearance="ghost" arrow="down">
                Knopka
            </Button>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ut.</P>
            <Tag size="s" color="ghost">
                Pipiska
            </Tag>
            <Tag size="m" color="green">
                Pipiska
            </Tag>
            <Tag size="m" color="grey">
                Pipiska
            </Tag>
            <Tag size="s" color="primary">
                Pipiska
            </Tag>
            <Tag size="m" color="red" href="https://google.com">
                Pipiska
            </Tag>
        </>
    );
}
