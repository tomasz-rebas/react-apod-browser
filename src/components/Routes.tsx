import React, { useEffect, useState } from 'react';
import localData from '../data/data2015_4.json';
import { Switch, Route } from 'react-router-dom';

import Grid from '../pages/Grid';
import PicturePage from '../pages/PicturePage';
import Start from '../pages/Start';

export default function Routes() {

    const [apodData, setApodData] = useState<Array<any>>([]);

    async function fetchData() {

        const url = 'https://api.nasa.gov/planetary/apod?api_key=wAdeucxqcxW23cUydKnHI5YGEbljt8aVE4NP0Y3L&start_date=2017-04-01&end_date=2017-06-01&thumbs=true';

        try {
            const response = await fetch(url);
            const data = await response.json();
            setApodData(data);
        } catch (e) {
            console.error('The error occured. ' + e);
        }
    }

    const pictureRoutes = apodData.map(element => 
        <Route 
            exact path={`/${element.date}`}
            render={() => <PicturePage data={element}/>}
            key={element.date}
        />
    );

    return (
        <Switch>
            <Route exact path="/">
                <Start fetchData={fetchData}/>
            </Route>
            <Route 
                exact path="/home"
                render={() => <Grid data={apodData}/>}
            />
            {pictureRoutes}
        </Switch>
    );
}