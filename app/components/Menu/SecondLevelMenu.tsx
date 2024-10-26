"use client";

import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import { getMenu } from "@/api/menu";
import { ThirdLevelMenu } from "./ThirdLevelMenu";
import { useEffect, useState } from "react";
import { IMenuItem } from "@/interfaces/menu.interface";

export interface ISecondLevelMenuProps {
    firstCategory: TopLevelCategory;
    route: string;
}

export const SecondLevelMenu = ({ firstCategory, route }: ISecondLevelMenuProps) => {
    const [menu, setMenu] = useState<IMenuItem[]>([]);
    const [openedMenu, setOpenedMenu] = useState<IMenuItem>();

    const openMenu = (m: IMenuItem) => {
        return () => {
            setOpenedMenu({ ...m, isOpened: true });
        };
    };

    const getMenuAsync = async () => {
        setMenu(await getMenu(firstCategory));
    };

    useEffect(() => {
        getMenuAsync();
    }, []);

    return (
        <div className={styles.secondBlock}>
            {menu.map(m => (
                <div className={styles.secondCategory} key={m._id.secondCategory}>
                    <div className={styles.secondLevel} onClick={openMenu(m)}>
                        {m._id.secondCategory}
                    </div>
                    <div
                        className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}
                    >
                        {m._id.secondCategory == openedMenu?._id.secondCategory && (
                            <ThirdLevelMenu pages={m.pages} route={route} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
