export function convertMinuteToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    //padStart adiciona zero caso tenha apenas um algarismo
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;    
}