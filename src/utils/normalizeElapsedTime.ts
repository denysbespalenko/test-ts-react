function normalizeTimeDisplay(timeNumber: number): string { 
  return timeNumber === 0 ? '00' : `${timeNumber}`.length < 2 ? `0${timeNumber}` : `${ timeNumber }`; 
}

function normalizeElapsedTime(time: number): string {
  const dayToSec = 3600;
  const minToSec = 60;
  const milliseconds = 1000;

  const now: number = Date.now() ;
  const gap: number = (now - time) / milliseconds;

  const days: number = Math.floor(+(gap / dayToSec));
  const minutes: number = Math.floor(+((gap - days * dayToSec) / minToSec));
  const seconds: number = Math.floor(+(gap - days * dayToSec - minutes * minToSec));

  const displayDay = normalizeTimeDisplay(days)
  const displayMinutes = normalizeTimeDisplay(minutes) 
  const displaySeconds = normalizeTimeDisplay(seconds)

  return `${displayDay} : ${displayMinutes} : ${displaySeconds}`;
}

export default normalizeElapsedTime;