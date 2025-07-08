import { useTime } from '../hooks/useTime';
import styles from '../styles/Clock.module.scss';

interface ClockProps {
    title?: string;
}

const Clock = ({ title = 'デジタル時計' }: ClockProps) => {
    const { timeString, dateString, dayOfWeek, timezone } = useTime();

    return (
        <div className={styles.clockContainer}>
            <div className={styles.clockWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.time}>{timeString}</div>
                <div className={styles.date}>{dateString}</div>
                <div className={styles.dayOfWeek}>{dayOfWeek}</div>
                <div className={styles.timezone}>
                    タイムゾーン: {timezone}
                </div>
            </div>
        </div>
    );
};

export default Clock; 