/**
 * Takes a date and returns a string with the time remaining until that date
 */
export function countdown(date: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  // Throw error if date is in the past
  if (date.getTime() < new Date().getTime()) {
    throw new Error("Date must be in the future");
  }

  let today = new Date();
  let diff = date.getTime() - today.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(diff / (1000 * 60)) % 60;
  let seconds = Math.floor(diff / 1000) % 60;
  // return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
