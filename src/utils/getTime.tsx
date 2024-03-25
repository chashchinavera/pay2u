export function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${hours}:${minutes}`;
  }