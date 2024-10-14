"use client";

import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import { useEffect, useState } from "react";
import StarIcon from "./star.svg";
import cn from "classnames";

export const Rating = ({ isEditable = false, rating, setRating, ...props }: IRatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    tabIndex={isEditable ? 0 : -1}
                />
            );
        });
        setRatingArray(updatedArray);
    };

    return <div {...props}>{ratingArray.map(r => r)}</div>;
};
