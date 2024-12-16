import { ITopPageAdvantage } from "@/interfaces/page.interface";
import styles from "./Advantages.module.css";
import CheckIcon from "./check.svg";

export interface IAdvantagesProps {
    advantages: ITopPageAdvantage[];
}

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIcon />
                    <div className={styles.title}>{a.title}</div>
                    <div className={styles.line}></div>
                    <div className={styles.desc}>{a.description}</div>
                </div>
            ))}
        </>
    );
};
