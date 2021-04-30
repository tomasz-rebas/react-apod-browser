import { css } from '@emotion/css';
import GridList from '../components/GridList';
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
                data ? <GridList data={data}/> : <LoadingSpinner/>
            }
            </main>
        </div>
    );
}