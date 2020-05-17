import moment from "moment";
const weekly = [
  {
    id: 0,
    name: "Week-0",
    startDay: "04-05",
    endDay: "10-05",
  },
  {
    id: 1,
    name: "Week-1",
    startDay: "11-05",
    endDay: "17-05",
  },
  {
    id: 2,
    name: "Week-2",
    startDay: "18-05",
    endDay: "24-05",
  },
];

function WeeklyReducer(state, action) {
  console.log("Action Called is", action.type);

  switch (action.type) {
    case "NEW WEEK": {
      const start = moment().isoWeekday(1).format("DD-MM");
      const end = moment().isoWeekday(7).format("DD-MM");
      return weekly.push({
        name: "Week-" + weekly.length,
        startDay: start,
        endDay: end,
      });
    }
    case "CURRENT WEEK": {
      const week = weekly[weekly.length - 1];
      week.lastIndex = weekly.length - 1;
      return week;
    }
    case "PREV WEEK": {
      let current = action.current;

      if (current.id > 0) {
        current = weekly[current.id - 1];
      }

      current.lastIndex = weekly.length - 1;
      return current;
    }
    case "NEXT WEEK": {
      let current = action.current;

      if (current.id !== weekly.length - 1) {
            current = weekly[current.id + 1]
      }

      current.lastIndex = weekly.length - 1;
      return current;
    }
    default: {
      console.log("Error Some where");
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

export default WeeklyReducer;
