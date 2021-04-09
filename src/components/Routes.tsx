import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Grid from '../pages/Grid';
import PicturePage from '../pages/PicturePage';
import Start from '../pages/Start';

export default function Routes() {

    type ApodObj = {
        url: string,
        date: string,
        media_type: string,
        [key: string]: string
    }

    const [apodData, setApodData] = useState<Array<ApodObj>>([]);

    async function fetchData(startDate: string, endDate: string) {

        const url = `https://api.nasa.gov/planetary/apod?api_key=wAdeucxqcxW23cUydKnHI5YGEbljt8aVE4NP0Y3L&start_date=${startDate}&end_date=${endDate}&thumbs=true`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setApodData(data);
        } catch (e) {
            console.error('The error occured. ' + e);
        }
    }

    const pictureRoutes = apodData ? apodData.map(element => 
        <Route 
            exact path={`/${element.date}`}
            key={element.date}
        >
            <PicturePage data={element}/>
        </Route>
    ) : '';

    return (
        <Switch>
            <Route exact path="/">
                <Start fetchData={fetchData}/>
            </Route>
            <Route exact path="/home">
                <Grid data={apodData}/>
            </Route>
            {pictureRoutes}
        </Switch>
    );
}