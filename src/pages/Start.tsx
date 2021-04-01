import { css } from '@emotion/css';
import { useState } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

type Props = {
    fetchData: Function
}

export default function Start({ fetchData }: Props) {    

    const [inputDateRanges, setInputDateRanges] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    function handleClick() {
        fetchData();
    }

    const style = {
        wrapper: css`
            text-align: center;
        `,
        button: css`
            display: block;
            padding: 15px 30px 15px 30px;
            margin: auto;
            margin-top: 30px;
            margin-bottom: 30px;
            font-family: inherit;
            font-size: 1.2em;
            border: none;
            border-radius: 3px;
            color: #ddd;
            background-color: #555;
            cursor: pointer;
            &:hover {
                background-color: #888;
            };
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
            <button 
                className={style.button}
                onClick={handleClick}
            >
                Continue
            </button>
        </div>
    );
}