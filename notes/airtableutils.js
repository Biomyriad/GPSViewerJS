var atUtil = {}

atUtil.addDays = (date, days) => {
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  return newDate;
}

atUtil.subDays = (date, days) => {
  days = days -1
  const newDate = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  return newDate;
}


