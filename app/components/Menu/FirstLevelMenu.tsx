"use client";

import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "./Menu";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { SecondLevelMenu } from "./SecondLevelMenu";

export interface IFirstLevelMenuProps {
    SecondLevelMenu: ReactNode;
}

export const FirstLevelMenu = () => {
    const [firstCategory, setFirstCategory] = useState<TopLevelCategory>();

    const openFirstLevel = (openedCategory: TopLevelCategory) => {
        return () => {
            setFirstCategory(openedCategory);
        };
    };

    return (
        <>
            {firstLevelMenu.map(m => (
                <div key={m.route}>
                    <Link href={`/${m.route}`} onClick={openFirstLevel(m.id)}>
                        <div
                            className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}
                        >
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </Link>
                    {m.id == firstCategory && <SecondLevelMenu firstCategory={firstCategory} route={m.route} />}
                </div>
            ))}
        </>
    );
};
