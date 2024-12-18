import styles from "./Button.module.css";
import cn from "classnames";
import { IButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";

export const Button = ({ appearance, children, className, arrow = "none", ...props }: IButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == "primary",
                [styles.ghost]: appearance == "ghost"
            })}
            {...props}
        >
            {children}
            {arrow != "none" && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow == "down"
                    })}
                >
                    <ArrowIcon />
                </span>
            )}
        </button>
    );
};
