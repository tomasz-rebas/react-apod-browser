import React, { useEffect, useState } from 'react';
import localData from '../data/data2015_4.json';
import { Switch, Route } from 'react-router-dom';
import Grid from '../pages/Grid';

export default function Routes() {

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

    return (
        <Switch>
            <Route 
                exact path="/"
                render={() => <Grid data={apodData}/>}
            />
        </Switch>
    );
}