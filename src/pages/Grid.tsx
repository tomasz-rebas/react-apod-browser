import { css } from '@emotion/css';
import Tile from '../components/Tile';

type Props = {
    data: any[]
}

export default function Grid({ data }: Props) {

    console.log(data);

    const tiles = data.map((element: any) => 
        <Tile 
            url={element.url}
            date={element.date}
            thumbnailUrl={element.media_type === 'video' ? element.thumbnail_url : null}
            key={element.date}
        />
    );

    const style = css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;

    return (
        <div className={style}>
            {data ? tiles : ''}
        </div>
    );
}