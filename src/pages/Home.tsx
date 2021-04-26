import { css } from '@emotion/css';
import Tile from '../components/Tile';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import FetchError from '../components/FetchError';

type Props = {
    data: any, /*Array<{[key: string]: string}>*/
    fetchError: string
}

export default function Home({ data, fetchError }: Props) {

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
            color: #333;
            text-decoration: none;
            margin-left: 15px;
            &:visited {
                color: #333;
            }
        `,
        navigation: css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background-color: #ddd;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        `,
        grid: css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 10px;
        `
    };

    return (
        <div>
            <nav className={style.navigation}>
                <Link to="/" className={style.link}>
                    <h3>&#60; Choose different date range</h3>
                </Link>
            </nav>
            {
                fetchError !== '' ? 
                <FetchError fetchError={fetchError}/> :
                data ?
                <div className={style.grid}>
                    {tiles}
                </div> :
                <LoadingSpinner/>
            }
        </div>
    );
}