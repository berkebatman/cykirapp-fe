const parseMonth = (month) => {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthFriendly = MONTHS[month - 1];

  return monthFriendly;
};

const formatDateTime = (dateTime, dateOnly = false) => {
  const isISO8601 = dateTime.includes("T");
  let date, time;
  if (isISO8601) {
    [date, time] = dateTime.split("T");
  } else {
    [date, time] = dateTime.split(" ");
  }

  let [year, month, day] = date.split("-");
  time = time.substring(0, 5);

  const monthFriendly = parseMonth(Number(month));

  if (dateOnly) {
    return `${day} ${monthFriendly} ${year}`;
  }
  return `${day} ${monthFriendly} ${year} at ${time}`;
};

export default formatDateTime;
