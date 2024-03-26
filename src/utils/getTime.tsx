export function getTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  if (minutes < 10)
    return `${hours}:0${minutes}`
  else
    return `${hours}:${minutes}`;
}