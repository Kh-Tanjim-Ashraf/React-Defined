export const timeFormat = (dateTime) => {
  const date = new Date();

  date.setHours(
    parseInt(dateTime.split(":")[0]),
    parseInt(dateTime.split(":")[1]),
  );

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
