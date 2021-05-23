import { formatDistance, addHours, subHours, isWithinInterval } from "date-fns";
import formatDateTime from "utils/formatDateTime";

const formatDateRelativeOrAbsolute = (
  dateTime,
  { startThreshold = 336, endThreshold = 336, dateOnly = false } = {}
) => {
  const relativeDateTime = formatDistance(new Date(dateTime), new Date(), {
    addSuffix: true,
  });
  const absoluteDateTime = formatDateTime(dateTime, dateOnly);
  const threshold = {
    start: subHours(new Date(dateTime), startThreshold),
    end: addHours(new Date(dateTime), endThreshold),
  };

  const isDateWithinRelativeRange = isWithinInterval(new Date(), threshold);
  if (isDateWithinRelativeRange) {
    return relativeDateTime;
  }
  return absoluteDateTime;
};
export default formatDateRelativeOrAbsolute;
