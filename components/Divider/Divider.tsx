import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Divider.module.css";
import cn from "classnames";

interface IDividerProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Divider: React.FC<IDividerProps> = ({ className, ...props }) => {
    return <hr className={cn(styles.divider, className)} {...props} />;
};
