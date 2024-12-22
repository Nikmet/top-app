import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Textarea.module.css";
import { FieldError } from "react-hook-form";

export interface ITextareaProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError;
}

export const Textarea = forwardRef(
    ({ className, error, ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                <textarea className={cn(styles.textarea, { [styles.error]: error })} {...props} ref={ref} />
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";
