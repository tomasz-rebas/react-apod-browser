import { css } from '@emotion/css';
import { useState, useEffect } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export default function Start() {    

    const [inputDateRanges, setInputDateRanges] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    useEffect(() => {
        console.log(inputDateRanges);
    }, [inputDateRanges]);

    const style = {
        wrapper: css`
            text-align: center;
        `
    }

    return (
        <div className={style.wrapper}>
            <h3>Welcome to</h3>
            <h1>Astronomy Picture of the Day Browser</h1>
            <p>
                The browser will display a list of Astronomy Pictures of the Day from NASA's archive based on your selected time.
                <br/>
                Select your desired time and click Continue.
                <br/>
                <br/>
                In case you're not familiar with Astronomy Picture of the Day go check it out <a href="https://apod.nasa.gov/apod/astropix.html">here</a>.
            </p>
            <DateRangePicker
                ranges={inputDateRanges}
                months={2}
                direction="vertical"
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                onChange={(item: any) => setInputDateRanges([item.selection])}
            />
        </div>
    );
}