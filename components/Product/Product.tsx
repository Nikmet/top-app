import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Product.module.css";
import { IProductModel } from "@/interfaces/product.interface";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "@/helpers/format";
import { Divider } from "../Divider/Divider";
import Image from "next/image";

export interface IProductProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProductModel;
}

export const Product = ({ product }: IProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image width={70} height={70} src={product.image} alt={product.title} />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && (
                    <Tag className={styles.oldPrice} color="green">
                        <span>{priceRu(product.price - product.oldPrice)}</span>
                    </Tag>
                )}
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
                {product.categories.map(c => (
                    <Tag color="ghost" key={c}>
                        {c}
                    </Tag>
                ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.ratingTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</div>
            <Divider className={styles.hr} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                {product.advantages && (
                    <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>
                )}

                {product.disadvantages && (
                    <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>
                )}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
                <Button appearance="primary">Узнать подробнее</Button>
                <Button appearance="ghost" arrow="right">
                    Читать отзывы
                </Button>
            </div>
        </Card>
    );
};
