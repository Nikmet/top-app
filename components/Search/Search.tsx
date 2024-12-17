"use client";

import cn from "classnames";
import styles from "./Search.module.css";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import GlassIcon from "./Glass.svg";
import { useRouter } from "next/navigation";

export interface ISearchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSearch = (): void => {
        router.push(`/search?q=${search}`);
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button appearance="primary" className={styles.btn} onClick={() => goToSearch()}>
                <GlassIcon />
            </Button>
        </div>
    );
};
