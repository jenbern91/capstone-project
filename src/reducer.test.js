import { availableTimesReducer, initializeTimes, fetchAvailableTimesForDate } from './reducers/bookingReducer';

// Unit test for initializeTimes function
test('initializeTimes returns the correct initial state', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

// Unit test for availableTimesReducer with UPDATE_TIMES action
test('availableTimesReducer returns the same state when UPDATE_TIMES action is dispatched', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: 'UPDATE_TIMES', date: '2023-10-01' };
  const newState = availableTimesReducer(initialState, action);
  expect(newState).toEqual(fetchAvailableTimesForDate(action.date));
});