export interface TimeFormatOptions {
    hour12: boolean;
    showSeconds: boolean;
    locale: string;
}

export const formatTime = (
    date: Date,
    options: Partial<TimeFormatOptions> = {}
): string => {
    const {
        hour12 = false,
        showSeconds = true,
        locale = 'ja-JP',
    } = options;

    const formatOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12,
    };

    if (showSeconds) {
        formatOptions.second = '2-digit';
    }

    return date.toLocaleTimeString(locale, formatOptions);
};

export const formatDate = (
    date: Date,
    locale: string = 'ja-JP'
): string => {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const formatDayOfWeek = (
    date: Date,
    locale: string = 'ja-JP'
): string => {
    return date.toLocaleDateString(locale, {
        weekday: 'long',
    });
};

export const getTimezoneInfo = (): { timezone: string; offset: string } => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = new Date().toLocaleString('ja-JP', {
        timeZoneName: 'short',
    }).split(' ').pop() || '';

    return { timezone, offset };
}; 