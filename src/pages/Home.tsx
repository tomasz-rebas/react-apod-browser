import { css } from '@emotion/css';
import Tile from '../components/Tile';
import { Link } from 'react-router-dom';

type Props = {
    data: Array<{[key: string]: string}>
}

export default function Grid({ data }: Props) {

    const tiles = Array.isArray(data) ? data.map((element: any) => 
        <Tile 
            url={element.url}
            date={element.date}
            thumbnailUrl={element.media_type === 'video' ? element.thumbnail_url : null}
            key={element.date}
        />
    ) : '';

    const style = {
        back: css`
            color: #ddd;
            margin-left: 15px;
        `,
        grid: css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        `
    };

    return (
        <div>
            <Link to="/">
                <h3 className={style.back}>&#60; Choose different date range</h3>
            </Link>
            {
                tiles ? 
                <div className={style.grid}>
                    {tiles}
                </div> :
                <div>Sorry. Error.</div>
            }
        </div>
    );
}