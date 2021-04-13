import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Props = {
    url: string,
    date: string,
    thumbnailUrl: string
}

export default function Tile( { url, date, thumbnailUrl }: Props ) {

    const [isLoaded, setIsLoaded] = useState(false);

    url = thumbnailUrl ? thumbnailUrl : url;

    function getDisplayDate(d: string) {

        const dateObj = new Date(d);

        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        return <div className={style.date}>{day} {month} {year}</div>;
    }

    useEffect(() => console.log(isLoaded), [isLoaded]);

    const style = {
        wrapper: css`
            display: flex;
            position: relative;
            background-image: url("${url}");
            background-size: 150px;
            background-repeat: no-repeat;
            background-size: cover;
            flex-basis: 200px;
            height: 150px;
            margin: 2px;
            flex-grow: 1;
        `,
        overlay: css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: inherit;
            vertical-align: center;
            text-decoration: none;
            z-index: 1;
            color: #dddddd;
            background-color: black;
            opacity: 0;
            &:hover {
                opacity: 0.8;
            }
            transition: 0.4s;
        `,
        date: css`
            text-align: center;
            z-index: 2;
            font-size: 1.8em;
        `,
        img: css`
            display: none;
        `
    };

    return (
        <Link to={`/${date}`} className={style.wrapper}>
            <img 
                className={style.img}
                src={url}
                onLoad={() => setIsLoaded(true)}/>
            <div className={style.overlay}>{getDisplayDate(date)}</div>
            {isLoaded ? '' : <h3>Loading</h3>}
        </Link>
    );
}