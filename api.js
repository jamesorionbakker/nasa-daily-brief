import axios from 'axios';
import dayjs from 'dayjs';
import dotenv from 'dotenv';
dotenv.config()

const nextDayUNIX = (unixTime) => {
    return dayjs.unix(unixTime).add(1, 'day').unix();
};
const unixTimeFromString = (dateString) => {
    return dayjs(dateString).unix();
};
const dateFromUnix = (unixTime) => {
    return dayjs.unix(unixTime).format('YYYY-MM-DD');
};
const apodCache = {};

export const get = async (startDate, endDate) => {
    let startDateUNIX = unixTimeFromString(startDate);
    let endDateUNIX = unixTimeFromString(endDate);
    let currentDateUNIX = startDateUNIX;
    let responseArray = [];

    while (currentDateUNIX <= endDateUNIX) {
        let cachedEntry = apodCache[dateFromUnix(currentDateUNIX)];
        if (cachedEntry) {
            responseArray.push(cachedEntry);
            currentDateUNIX = nextDayUNIX(currentDateUNIX);
        } else {
            console.log('querying NASA API');
            let apiQuery = `https://api.nasa.gov/planetary/apod?thumbs=true&start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NASA_API_KEY}`;
            let apiResponse = await axios.get(apiQuery);
            responseArray = apiResponse.data;
            responseArray.forEach((entry) => {
                if (!apodCache[entry.date]) {
                    apodCache[entry.date] = entry;
                }
            });
            break;
        }
    }
    return responseArray;
};