import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';
import StartPage from '../pages/StartPage';

import { Global, css } from '@emotion/react';

export const ThemeContext = React.createContext<boolean>(true);

export default function Routes() {

    // type ApodObj = {
    //     url: string,
    //     date: string,
    //     media_type: string,
    //     [key: string]: string
    // }

    /* There's an error for this range: 2013/01/17 - 2013/06/19 */

    const [apodData, setApodData] = useState<any>(null);
    const [pictureRoutes, setPictureRoutes] = useState<Array<JSX.Element>>();
    const [fetchError, setFetchError] = useState<string>('');
    const [darkMode, setDarkMode] = useState<boolean>(true);

    let history = useHistory();

    async function fetchData(startDate: string, endDate: string) {

        // startDate = '2012-11-18';
        // endDate = '2013-01-19';

        setApodData(null);
        setFetchError('');

        const url = `${process.env.REACT_APP_APOD_URL}?api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`;

        try {
            console.log(`Fetching data for: ${startDate} to ${endDate}...`);
            const response = await fetch(url);
            const data = await response.json();

            if (Array.isArray(data)) {
                setApodData(data);
            } else {
                if (typeof data === 'object') {
                    if (('code' in data) && ('msg' in data)) {
                        setFetchError(`${data.code} - ${data.msg}`);
                    } else {
                        setFetchError('Error: unknown');
                    }
                } else {
                    setFetchError('Error: unknown');
                }
            }
        } catch (e) {
            console.error('The error occured. ' + e);
            setFetchError('' + e);
        }
    }

    useEffect(() => {
        history.push('/');
    }, [history]);

    useEffect(() => {
        setPictureRoutes(
            Array.isArray(apodData) ? 
            apodData.map((element, index, array) => {

                const isLastElement = index === array.length - 1;
                const isFirstElement = index === 0;

                const adjacentArticles = {
                    previous: isFirstElement ? null : array[index - 1].date,
                    next: isLastElement ? null : array[index + 1].date
                }

                return (
                    <Route 
                        exact path={`/${element.date}`}
                        key={element.date}
                    >
                        <ArticlePage 
                            data={element}
                            adjacentArticles={adjacentArticles}
                        />
                    </Route>
                );
            }
        ) : [])
    }, [apodData]);

    return (
        <ThemeContext.Provider value={darkMode}>
            <Global
                styles={css`
                    body {
                        font-family: 'Blinker', sans-serif;
                        background-color: ${darkMode ? `#333` : `#ddd`};
                        color: ${darkMode ? `#ddd` : `#333`};
                        margin: 0;
                        height: 100%;
                        min-height: 100%;
                    }
                `}
            />
            <Switch>
                <Route exact path="/">
                    <StartPage 
                        fetchData={fetchData}
                        setDarkMode={setDarkMode}
                    />
                </Route>
                <Route exact path="/home">
                    <HomePage
                        data={apodData}
                        fetchError={fetchError}
                        setDarkMode={setDarkMode}
                    />
                </Route>
                {pictureRoutes}
            </Switch>
        </ThemeContext.Provider>
    );
}