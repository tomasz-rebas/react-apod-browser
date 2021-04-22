import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Article from '../pages/Article';
import Start from '../pages/Start';

export default function Routes() {

    // type ApodObj = {
    //     url: string,
    //     date: string,
    //     media_type: string,
    //     [key: string]: string
    // }

    /*

    There's an error for this range:

    2013-01-17 --- 2013-06-19

    */

    const [apodData, setApodData] = useState<any>(null);
    const [pictureRoutes, setPictureRoutes] = useState<Array<JSX.Element>>();
    const [fetchError, setFetchError] = useState<string>('');

    async function fetchData(startDate: string, endDate: string) {

        setApodData(null);

        const url = `https://api.nasa.gov/planetary/apod?api_key=wAdeucxqcxW23cUydKnHI5YGEbljt8aVE4NP0Y3L&start_date=${startDate}&end_date=${endDate}&thumbs=true`;

        try {
            console.log(`Fetching data for: ${startDate} to ${endDate}...`);
            const response = await fetch(url);
            const data = await response.json();
            setApodData(data);
            console.log(apodData);
        } catch (e) {
            console.error('The error occured. ' + e);
            setFetchError('' + e);
        }
    }

    useEffect(() => {
        setPictureRoutes(Array.isArray(apodData) ? apodData.map(element => 
            <Route 
                exact path={`/${element.date}`}
                key={element.date}
            >
                <Article data={element}/>
            </Route>
        ) : [])
    }, [apodData]);

    return (
        <Switch>
            <Route exact path="/">
                <Start fetchData={fetchData}/>
            </Route>
            <Route exact path="/home">
                <Home data={apodData} fetchError={fetchError}/>
            </Route>
            {pictureRoutes}
        </Switch>
    );
}