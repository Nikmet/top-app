import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { getProducts } from "@/api/products";
import { Htag } from "@/components/Htag/Htag";
import { Tag } from "@/components/Tag/Tag";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./TopPage.module.css";
import { HhData } from "@/components/HhData/HhData";
import { Advantages } from "@/components/Advantages/Advantages";
import { Sort } from "@/components/Sort/Sort";
import { Product } from "@/components/Product/Product";

export async function generateMetadata({ params }: { params: { alias: string } }): Promise<Metadata> {
    const page = await getPage(params.alias);
    return {
        title: page?.metaTitle
    };
}

// ЭТО НУЖНО ЧТОБЫ СГЕНЕРИРОВАТЬ СТАТИЧЕСКИЕ СТРАНИЦЫ!!!!!!! НА СЕРВЕРЕ
export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
}

export default async function CourseProducts({ params }: { params: { alias: string } }) {
    const page = await getPage(params.alias);

    if (!page) {
        notFound();
    }

    const products = await getProducts(page.category, 10);

    return (
        <div className={styles.topPage}>
            <div className={styles.title}>
                <Htag tag="h1">{page.title}</Htag>
                {products && (
                    <Tag color="grey" size="m">
                        {products.length}
                    </Tag>
                )}
                <Sort />
            </div>
            <div>{products && products.map(p => <Product product={p} key={p._id} />)}</div>

            {page.hh && (
                <>
                    {" "}
                    <div className={styles.hhTitle}>
                        <Htag tag="h2">Вакансии - {page.category}</Htag>
                        <Tag color="red" size="s">
                            hh.ru
                        </Tag>
                    </div>
                    <HhData {...page.hh} />
                </>
            )}

            {page.advantages && page.advantages.length > 0 && (
                <>
                    <Htag tag="h2">Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            )}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(t => (
                <Tag style={{ marginRight: "10px", marginBottom: "5px" }} size="s" key={t} color="primary">
                    {t}
                </Tag>
            ))}
        </div>
    );
}
