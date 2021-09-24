import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import * as api from './api.js'
import dayjs from 'dayjs';

dotenv.config();
let app = express();
app.use(express.static('./client/build'));
app.use(urlencoded({ extended: true }));


app.get('/posts/', async (req, res) => {
    try {
        let page = req.query.page;
        let endDate = dayjs().subtract(5 * page, 'day')
        let startDate = endDate.subtract(4 , 'day');
        console.log(page, startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
        let nasaRes = await api.get(startDate, endDate);
        res.json(nasaRes.reverse());
    } catch (error) {
        console.error(error);
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log('NASA Daily Brief Server running on',process.env.PORT);
});
