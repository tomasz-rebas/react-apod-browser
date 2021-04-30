import { css } from '@emotion/css';
import Tile from '../components/Tile';

type Props = {
    data: any
}

export default function GridList({ data }: Props) {

    const tiles = Array.isArray(data) ? data.map((element: any) => 
        <Tile 
            url={element.url}
            date={element.date}
            thumbnailUrl={element.media_type === 'video' ? element.thumbnail_url : null}
            key={element.date}
        />
    ) : '';

    const style = {
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
        <div className={style.grid}>
            {tiles}
        </div>
    );
}