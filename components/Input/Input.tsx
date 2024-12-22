import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import { FieldError } from "react-hook-form";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: FieldError;
}

export const Input = forwardRef(
    ({ className, error, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
        return (
            <div className={styles.inputWrapper}>
                <input className={cn(className, styles.input, { [styles.error]: error })} {...props} ref={ref} />
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";
