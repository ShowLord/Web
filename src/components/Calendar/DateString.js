export default function getDateString(yyyy, mm, dd) {
  const mon = mm.toString().padStart(2, 0);
  const day = dd.toString().padStart(2, 0);
  return `${yyyy}${mon}${day}`;
}
const currentYear = new Date().getFullYear();
const currentMon = new Date().getMonth();
const currentDate = new Date().getDate();
export const currentDayId = getDateString(currentYear, currentMon + 1, currentDate);
