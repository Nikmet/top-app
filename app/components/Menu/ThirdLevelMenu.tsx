"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import cn from "classnames";
import { IPageItem } from "@/interfaces/menu.interface";
import { usePathname } from "next/navigation";

export interface IThirdLevelMenuProps {
    pages: IPageItem[];
    route: string;
}

export const ThirdLevelMenu = ({ pages, route }: IThirdLevelMenuProps) => {
    const path = usePathname().split("/")[2];

    return (
        <div>
            {pages.map(p => (
                <Link
                    href={`/${route}/${p.alias}`}
                    key={p.title}
                    className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: path == p.alias
                    })}
                >
                    {p.title}
                </Link>
            ))}
        </div>
    );
};
