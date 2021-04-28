import { css } from '@emotion/css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
// https://www.npmjs.com/package/react-date-range

import { addDays } from 'date-fns';
import getDateString from '../functions/getDateString';
import { ThemeContext } from '../components/Routes';
import DarkModeSwitch from '../components/DarkModeSwitch';


type Props = {
    fetchData: Function,
    setDarkMode: Function
}

export default function Start({ fetchData, setDarkMode }: Props) {  

    const [inputDateRanges, setInputDateRanges] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    const darkMode = useContext(ThemeContext);
    
    console.log(darkMode);

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
        navigation: css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-wrap: wrap;
            background-color: ${darkMode ? `#ddd` : `#333`};
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            height: 60px;
        `,
        link: css`
            color: ${darkMode ? `#ddd` : `#333`};
        `,
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
            color: ${darkMode ? `#ddd` : `#333`};
            background-color: ${darkMode ? `#555` : `#bbb`};
            cursor: pointer;
            &:hover {
                background-color: #888;
            };
        `,
        dateRangePicker: css`
            @media (max-width: 600px) {
                .rdrDefinedRangesWrapper {
                    display: none;
                }
            }
        `
    }

    const apodLink = 
    <a 
        className={style.link}
        href="https://apod.nasa.gov/apod/astropix.html"
        target="_blank"
        rel="noreferrer"
    >
            here
    </a>;

    return (
        <div className={style.wrapper}>
            <nav className={style.navigation}>
                <h3></h3>
                <DarkModeSwitch setDarkMode={setDarkMode}/>
            </nav>
            <h3>Welcome to</h3>
            <h1>Astronomy Picture of the Day Browser</h1>
            <p>
                The browser will display a list of Astronomy Pictures 
                of the Day from NASA's archive based on your selected time.
                <br/>
                Select your desired time and click Continue.
                <br/>
                <br/>
                In case you're not familiar with Astronomy Picture 
                of the Day go check it out {apodLink}.
            </p>
            <DateRangePicker
                className={style.dateRangePicker}
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