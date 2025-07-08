import { useState, useEffect } from 'react';

export interface TimeData {
    date: Date;
    timeString: string;
    dateString: string;
    dayOfWeek: string;
    timezone: string;
}

export const useTime = (): TimeData => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('ja-JP', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
    };

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatDayOfWeek = (date: Date): string => {
        return date.toLocaleDateString('ja-JP', {
            weekday: 'long',
        });
    };

    const getTimezone = (): string => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };

    return {
        date: currentTime,
        timeString: formatTime(currentTime),
        dateString: formatDate(currentTime),
        dayOfWeek: formatDayOfWeek(currentTime),
        timezone: getTimezone(),
    };
}; 