import React from 'react'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function Clock(){

    let [time, setTime] = useState(dayjs());

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <h1 className="time">{time.format('h:mm:ss')}</h1>
    )
}