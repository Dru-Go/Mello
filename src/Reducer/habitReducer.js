const habits = [
  {
    id: 0,
    name: "Read 1-0 pages",
    isGood: true,
    pattern: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: 1,
    name: "Workout 10 min",
    isGood: true,
    pattern: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: "",
    isGood: false,
    pattern: [0, 1, 2, 3, 4, 5, 6],
  },
];

export default function HabitReducer(state = habits, action) {
  switch (action.type) {
    case "NEW":
      return null;
    case "ALL":
      return state;
    case "GET":
      return null;

    default:
      return state;
  }
}
