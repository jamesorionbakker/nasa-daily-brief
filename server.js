import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import dayjs from 'dayjs';
dotenv.config();

let app = express();

app.use(express.static('./client/build'));
app.use(urlencoded({ extended: true }));

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
console.log('cache', apodCache);

const buildQueryRes = async (startDate, endDate) => {
    let startDateUNIX = unixTimeFromString(startDate);
    let endDateUNIX = unixTimeFromString(endDate);
    let currentDateUNIX = startDateUNIX;
    let responseArray = [];

    while (currentDateUNIX <= endDateUNIX) {
        console.log('checking date', currentDateUNIX);
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

app.get('/images/', async (req, res) => {
    try {
        let startDate = req.query.start_date;
        let endDate = req.query.end_date;
        let nasaRes = await buildQueryRes(startDate, endDate);
        res.json(nasaRes.reverse());
    } catch (error) {
        console.error(error);
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log('listening on ' + process.env.PORT);
});
