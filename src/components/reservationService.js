/* global fetchAPI */
import { fetchAPI } from '../myAPI';


export async function initializeTimes() {
  const today = new Date();
  const availableTimes = await fetchAPI(today);
  return availableTimes;
}

export async function updateTimes(selectedDate) {
  const availableTimes = await fetchAPI(selectedDate);
  return availableTimes;
}

