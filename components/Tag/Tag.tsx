import { ITagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({ color = "ghost", children, href, size = "s", className, ...props }: ITagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.ghost]: color == "ghost",
                [styles.green]: color == "green",
                [styles.grey]: color == "grey",
                [styles.primary]: color == "primary",
                [styles.red]: color == "red"
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
