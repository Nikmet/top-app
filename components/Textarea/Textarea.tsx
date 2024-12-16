import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Textarea.module.css";

export interface ITextareaProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

export const Textarea = ({ className, ...props }: ITextareaProps): JSX.Element => {
    return <textarea className={cn(className, styles.textarea)} {...props} />;
};
