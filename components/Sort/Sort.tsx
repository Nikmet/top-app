"use client";

import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import SortIcon from "./sort.svg";
import styles from "./Sort.module.css";
import cn from "classnames";
import { SortEnum } from "./Sort.enum";

export interface ISortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sort = ({ className, ...props }: ISortProps): JSX.Element => {
    const [sort, setSort] = useState<SortEnum>(SortEnum.Rating);

    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}
            >
                <SortIcon className={styles.sortIcon} />
                По цене
            </span>
        </div>
    );
};
