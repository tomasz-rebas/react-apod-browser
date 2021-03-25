import React, { useEffect, useState } from 'react';
import localData from '../data/data2015_4.json';
import Tile from './Tile';
import { css } from '@emotion/css';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {

    const [apodData, setApodData] = useState<Array<any>>([]);

    // async function fetchData() {

    //     const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-04-01&end_date=2017-07-01&thumbs=true';

    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //     } catch (e) {
    //         console.error('The error occured. ' + e);
    //     }
    // }

    useEffect(() => {
        setApodData(localData);
        console.log(apodData);
    }, []);

    const tiles = apodData.map(element => 
        <Tile 
            url={element.url}
            date={element.date}
            thumbnailUrl={element.media_type === 'video' ? element.thumbnail_url : null}
            key={element.date}
        />
    );

    const styleMain = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;

    return (
        <main className={styleMain}>
            <Router>
                {apodData ? tiles : ''}
            </Router>
        </main>
    );
}