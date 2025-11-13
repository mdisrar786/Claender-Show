
import "./Calendar.css";
export default function Calendar({ date }) {
  if (!(date instanceof Date) || isNaN(date)) {
    return <div>Invalid date</div>;
  }

  const year = date.getFullYear();
  const month = date.getMonth(); // 0-based
  const today = date.getDate();

  // 1. First day of the month (0 = Sun … 6 = Sat)
  const firstDay = new Date(year, month, 1).getDay();

  // 2. How many days in this month?
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 3. Build the grid (6 rows × 7 cols is enough for any month)
  const cells = [];
  let day = 1;

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        // empty cells before the 1st
        cells.push(<td key={`${row}-${col}`} />);
      } else if (day > daysInMonth) {
        // empty cells after the last day
        cells.push(<td key={`${row}-${col}`} />);
      } else {
        const isToday = day === today;
        cells.push(
          <td
            key={`${row}-${col}`}
            className={isToday ? "highlight" : ""}
          >
            {day}
          </td>
        );
        day++;
      }
    }
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar">
      <header className="calendar-header">
        {monthNames[month]} {year}
      </header>

      <table>
        <thead>
          <tr>
            {weekDays.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* split cells into rows */}
          {[...Array(6)].map((_, i) => (
            <tr key={i}>{cells.slice(i * 7, i * 7 + 7)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}