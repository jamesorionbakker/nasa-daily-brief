import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import * as api from './api.js'

dotenv.config();
let app = express();
app.use(express.static('./client/build'));
app.use(urlencoded({ extended: true }));



app.get('/images/', async (req, res) => {
    try {
        let startDate = req.query.start_date;
        let endDate = req.query.end_date;
        let nasaRes = await api.get(startDate, endDate);
        res.json(nasaRes.reverse());
    } catch (error) {
        console.error(error);
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log('listening on ' + process.env.PORT);
});
