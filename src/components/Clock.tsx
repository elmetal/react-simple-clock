import { useTime } from '../hooks/useTime';
import styles from '../styles/Clock.module.scss';

const Clock = () => {
    const { timeString, dateString, dayOfWeek, timezone } = useTime();

    return (
        <main className={styles.clockContainer} role="main">
            <section
                className={styles.clockWrapper}
                aria-labelledby="clock-title"
                role="region"
            >
                <h1 id="clock-title" className={styles.visuallyHidden}>
                    Digital Clock
                </h1>

                <time
                    className={styles.time}
                    dateTime={new Date().toISOString()}
                    aria-live="polite"
                    aria-atomic="true"
                    aria-label={`現在の時刻: ${timeString}`}
                    role="timer"
                >
                    {timeString}
                </time>

                <div
                    className={styles.date}
                    aria-live="polite"
                    aria-label={`今日の日付: ${dateString}`}
                >
                    {dateString}
                </div>

                <div
                    className={styles.dayOfWeek}
                    aria-live="polite"
                    aria-label={`今日の曜日: ${dayOfWeek}`}
                >
                    {dayOfWeek}
                </div>

                <div
                    className={styles.timezone}
                    aria-label={`タイムゾーン: ${timezone}`}
                    role="status"
                >
                    タイムゾーン: {timezone}
                </div>
            </section>
        </main>
    );
};

export default Clock; 