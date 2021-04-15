import { css, keyframes } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Props = {
    url: string,
    date: string,
    thumbnailUrl: string
}

export default function Tile( { url, date, thumbnailUrl }: Props ) {

    const [isLoaded, setIsLoaded] = useState(false);

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

    const animations = {
        loading: keyframes`
            from, to {
                opacity: 0
            }

            50% {
                opacity: 1;
            }
        `
    }

    const style = {
        wrapper: css`
            display: flex;
            position: relative;
            background-image: url("${thumbnailUrl ? thumbnailUrl : url}");
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
        `,
        loadingPlaceholder: css`
            height: 150px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #ccc;
                margin-left: 3px;
                margin-right: 3px;
            }

            span:nth-child(1) {
                animation: ${animations.loading} 1.5s ease infinite;
            }
            
            span:nth-child(2) {
                animation: ${animations.loading} 1.5s ease infinite;
                animation-delay: 0.3s;
            }

            span:nth-child(3) {
                animation: ${animations.loading} 1.5s ease infinite;
                animation-delay: 0.6s;
            }
        `
    };

    return (
        <Link to={`/${date}`} className={style.wrapper}>
            <img 
                className={style.img}
                src={thumbnailUrl ? thumbnailUrl : url}
                onLoad={() => setIsLoaded(true)}
                alt="APOD thumbnail"
            />
            <div className={style.overlay}>{getDisplayDate(date)}</div>
            {
                isLoaded ?
                '' : 
                <div className={style.loadingPlaceholder}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            }
        </Link>
    );
}