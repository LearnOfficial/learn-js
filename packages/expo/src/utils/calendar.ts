import { LocaleSymbol } from '../i18n';

export function getDaysInMonth(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getWeekName(locale: LocaleSymbol, day: Date) {
  let weekName = day.toLocaleString(locale, { weekday: 'long' }).split(',')[0];
  weekName = weekName.charAt(0).toUpperCase() + weekName.slice(1);
  return weekName;
}

export function getMonthName(locale: LocaleSymbol, month: Date) {
  let monthName = month.toLocaleString(locale, { month: 'long' }).split(',')[0];
  monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  return monthName;
}
