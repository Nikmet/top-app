import { IReviewModel } from "@/interfaces/product.interface";
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import styles from "./Review.module.css";
import cn from "classnames";
import UserIcon from "./user.svg";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

interface IReviewProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    review: IReviewModel;
}

const Review: FC<IReviewProps> = ({ review, className, ...props }) => {
    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserIcon className={styles.user} />
            <div>
                <span className={styles.name}>{review.name}:</span>
                <span>{review.title}</span>
            </div>
            <div className={styles.date}>{format(new Date(review.createdAt), "dd MMMM yyyy", { locale: ru })}</div>
            <div className={styles.rating}>
                <Rating rating={review.rating} />
            </div>
            <div className={styles.description}>{review.description}</div>
        </div>
    );
};

export default Review;
