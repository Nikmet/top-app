import React, { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from "react";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "@/app/api";

interface IReviewFormProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
}

const ReviewForm: FC<IReviewFormProps> = ({ productId, className, ...props }) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IReviewForm>();

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError("Что-то пошло не так!");
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError("Что-то пошло не так!");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    {...register("name", { required: { value: true, message: "Заполните имя!" } })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    className={styles.title}
                    placeholder="Заголовок отзыва"
                    {...register("title", { required: { value: true, message: "Заполните заголовок!" } })}
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name="rating"
                        rules={{ required: { value: true, message: "Укажите рейтинг!" } }}
                        render={({ field }) => (
                            <Rating
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register("description", { required: { value: true, message: "Заполните описание!" } })}
                    className={styles.description}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance="primary">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && (
                <div className={styles.success}>
                    <div className={styles.successTitle}>Ваш отзыв отправлен!</div>
                    <div className={styles.successDesc}>Спасибо, ваш отзыв будет опубликован после проверки!</div>
                    <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
                </div>
            )}
            {error && <div>{error}</div>}
        </form>
    );
};

export default ReviewForm;
