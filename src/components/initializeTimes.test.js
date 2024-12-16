import { initializeTimes, updateTimes } from './reservationService';
import { fetchAPI } from  '../myAPI'

jest.mock('../myAPI');

describe('reservationService', () => {
    beforeEach(() => {
        fetchAPI.mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });

    test('initializeTimes returns a non-empty array of available booking times', async () => {
        const times = await initializeTimes();
        expect(Array.isArray(times)).toBe(true);
        expect(times.length).toBeGreaterThan(0);
    });

    test('updateTimes returns a non-empty array of available booking times', async () => {
        const times = await updateTimes();
        expect(Array.isArray(times)).toBe(true);
        expect(times.length).toBeGreaterThan(0);
    });

    test('initializeTimes calls fetchAPI once', async () => {
        await initializeTimes();
        expect(fetchAPI).toHaveBeenCalledTimes(1);
    });

    test('updateTimes calls fetchAPI once', async () => {
        await updateTimes();
        expect(fetchAPI).toHaveBeenCalledTimes(1);
    });

    test('initializeTimes returns the correct times', async () => {
        const times = await initializeTimes();
        expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });

    test('updateTimes returns the correct times', async () => {
        const times = await updateTimes();
        expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });
});