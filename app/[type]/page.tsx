import { notFound } from "next/navigation";
import { firstLevelMenu } from "../components/Menu/Menu";
import { Metadata } from "next";
import { IFirstLevelMenuItem } from "@/interfaces/menu.interface";

export const metadata: Metadata = {
    title: "Страница"
};

export function generateStaticParams() {
    return firstLevelMenu.map(p => ({
        type: p.route
    }));
}

const searchPage = (type: string): IFirstLevelMenuItem | undefined => {
    return firstLevelMenu.find(p => p.route == type);
};

export default function TopPage({ params }: { params: { type: string } }) {
    const page = searchPage(params.type);

    if (!page) {
        notFound();
    }

    return <>{page.name}</>;
}
