import React, { useEffect, useState } from 'react';
import localData from '../data2015.json';
import Tile from './Tile';
import { css } from '@emotion/css';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {

    const [apodData, setApodData] = useState<Array<any>>([]);

    // async function fetchData() {

    //     const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2000-01-01&end_date=2000-02-01';

    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //     } catch (e) {
    //         console.error('The error occured. ' + e);
    //     }
    // }

    useEffect(() => {
        setApodData(localData);
        console.log(localData);
    }, []);

    const tiles = apodData.map(element => 
        <Tile 
            url={element.url}
            date={element.date}
            key={element.date}
        />);

    const style = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;

    return (
        <main className={style}>
            <Router>
                {apodData ? tiles : ''}
            </Router>
        </main>
    );
}