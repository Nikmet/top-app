import styles from "./TopPage.module.css";

export default function Loading() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
        </div>
    );
}
