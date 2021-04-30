import { css } from '@emotion/css';
import Tile from '../components/Tile';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchError from '../components/FetchError';
import { useContext } from 'react';
import { ThemeContext } from '../components/Routes';
import DarkModeSwitch from '../components/DarkModeSwitch';

type Props = {
    data: any, /*Array<{[key: string]: string}>*/
    fetchError: string,
    setDarkMode: Function
}

export default function HomePage({ data, fetchError, setDarkMode }: Props) {

    const darkMode = useContext(ThemeContext);

    const tiles = Array.isArray(data) ? data.map((element: any) => 
        <Tile 
            url={element.url}
            date={element.date}
            thumbnailUrl={element.media_type === 'video' ? element.thumbnail_url : null}
            key={element.date}
        />
    ) : '';

    const style = {
        link: css`
            color: ${darkMode ? `#333` : `#ddd`};
            text-decoration: none;
            margin-left: 15px;
            &:visited {
                color: ${darkMode ? `#333` : `#ddd`};
            }
        `,
        navigation: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            background-color: ${darkMode ? `#ddd` : `#333`};
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            min-height: 60px;
        `,
        grid: css`
            margin-top: 10px;
            display: grid;

            @media (max-width: 300px) {
                grid-template-columns: 1fr
            }
            @media (min-width: 301px) and (max-width: 600px) {
                grid-template-columns: repeat(2, 1fr)
            }
            @media (min-width: 601px) and (max-width: 900px) {
                grid-template-columns: repeat(3, 1fr)
            }
            @media (min-width: 901px) and (max-width: 1200px) {
                grid-template-columns: repeat(4, 1fr)
            }
            @media (min-width: 1201px) and (max-width: 1500px) {
                grid-template-columns: repeat(5, 1fr)
            }
            @media (min-width: 1501px) and (max-width: 1800px) {
                grid-template-columns: repeat(6, 1fr)
            }
            @media (min-width: 1801px) and (max-width: 2100px) {
                grid-template-columns: repeat(7, 1fr)
            }
            @media (min-width: 2101px) {
                grid-template-columns: repeat(8, 1fr)
            }
        `
    };

    return (
        <div>
            <nav className={style.navigation}>
                <Link to="/" className={style.link}>
                    <h3>&#60; Choose different date range</h3>
                </Link>
                <DarkModeSwitch setDarkMode={setDarkMode}/>
            </nav>
            <main>
            {
                fetchError !== '' ? 
                <FetchError fetchError={fetchError}/> :
                data ?
                <div className={style.grid}>
                    {tiles}
                </div> :
                <LoadingSpinner/>
            }
            </main>
        </div>
    );
}