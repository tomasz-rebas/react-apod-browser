import { css } from '@emotion/css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import getDateString from '../functions/getDateString';

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

    function handleChange(item: any) {

        const {startDate, endDate} = item.selection;

        const diffMs = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 *24));

        if (diffDays > 365) {
            alert("Please select a range that doesn't exceed one year");
        } else {
            setInputDateRanges([item.selection])
        }
    }

    function handleClick() {

        const {startDate, endDate} = inputDateRanges[0];

        const startDateString = getDateString(startDate, 'YYYY-MM-DD');
        const endDateString = getDateString(endDate, 'YYYY-MM-DD');

        fetchData(startDateString, endDateString);
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
                onChange={handleChange}
                minDate={new Date('January 16, 1995 00:00:00')}
                maxDate={new Date()}
                shownDate={addDays(new Date(), -30)}
            />
            <Link to="/home">
                <button 
                    className={style.button}
                    onClick={handleClick}
                >
                    Continue
                </button>
            </Link>
        </div>
    );
}