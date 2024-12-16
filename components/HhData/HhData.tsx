import { IHhData } from "@/interfaces/page.interface";
import { Card } from "../Card/Card";
import styles from "./Hhdata.module.css";
import RateIcon from "./rate.svg";
import { priceRu } from "@/helpers/format";

export interface IHhDataProps extends IHhData {}

export const HhData = ({ ...data }: IHhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card color="white" className={styles.card}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.count}>{data.count}</div>
            </Card>
            <Card color="white" className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(data.juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(data.middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(data.seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                        <RateIcon className={styles.field} />
                    </div>
                </div>
            </Card>
        </div>
    );
};
