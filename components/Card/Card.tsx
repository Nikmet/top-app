import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";
import cn from "classnames";

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: "white" | "blue";
    children: ReactNode;
}

export const Card = forwardRef(
    (
        { color = "white", children, className, ...props }: ICardProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        return (
            <div
                className={cn(styles.card, className, {
                    [styles.cardWhite]: color == "white",
                    [styles.cardBlue]: color == "blue"
                })}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
