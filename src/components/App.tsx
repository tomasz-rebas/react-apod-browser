import React, { useEffect, useState } from 'react';
import data from '../data2015.json';
import Tile from './Tile';
import { css } from '@emotion/css';

export default function App() {

    const [pictureUrls, setPictureUrls] = useState<Array<string>>([]);

    function getPictureUrls(data: Array<{url: string}>) {
        return data.map(element => element.url);
    }

    async function fetchData() {

        const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2000-01-01&end_date=2000-02-01';

        try {
            const response = await fetch(url);
            const data = await response.json();
        } catch (e) {
            console.error('The error occured. ' + e);
        }
    }

    useEffect(() => {
        setPictureUrls(getPictureUrls(data));
        console.log(pictureUrls);
    }, []);

    const tiles = pictureUrls.map(url => <Tile url={url}/>);

    const style = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;

    return (
        <main className={style}>
            {pictureUrls ? tiles : ''}
        </main>
    );
}