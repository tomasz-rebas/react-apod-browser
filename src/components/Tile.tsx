import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

type Props = {
    url: string,
    date: string,
    thumbnailUrl: string
}

export default function Tile( { url, date, thumbnailUrl }: Props ) {

    function getDisplayDate(d: string) {

        const dateObj = new Date(d);

        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const day = dateObj.getDate();
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();

        return <div className={styleDate}>{day} {month}<br/>{year}</div>;
    }

    const style = css`
        position: relative;
        background-image: url("${thumbnailUrl ? thumbnailUrl : url}");
        background-size: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        width: 150px;
        height: 150px;
        margin: 2px;
    `;

    const styleOverlay = css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: inherit;
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
    `;

    const styleDate = css`
        text-align: center;
        z-index: 2;
        font-size: 1.8em;
    `;

    return (
        <Link to={"/" + date}>
            <div className={style}>
                <div className={styleOverlay}>{getDisplayDate(date)}</div>
            </div>
        </Link>
    );
}