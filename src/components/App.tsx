import React, { useEffect, useState } from 'react';
import getPictureUrls from '../functions/getPictureUrls';
import data from '../data.json';
import Tile from './Tile';

export default function App() {

    const [pictureUrls, setPictureUrls] = useState<Array<string>>([]);

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

    const tiles = pictureUrls.map(url => <Tile url={url}/>)

    return (
        <div>
            {pictureUrls ? tiles : ''}
        </div>
    );
}