const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export const availableTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAvailableTimesForDate(action.date);
    default:
      return state;
  }
};

export const fetchAvailableTimesForDate = (date) => {
  // Mock function to simulate fetching available times for a given date
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const initializeTimes = () => {
  // Logic to initialize available times
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};