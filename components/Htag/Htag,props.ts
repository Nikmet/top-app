import { ReactNode } from "react";
import cn from "classnames"

export interface IHtagProps {
    tag: "h1" | "h2" | "h3";
    children: ReactNode;
}
