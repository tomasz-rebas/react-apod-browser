import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

type Props = {
    url: string,
    date: string
}

export default function Tile( { url, date }: Props ) {

    // function getLinkLocation(fullUrl: string) {
    //     const arr = fullUrl.split('/');
    //     const imgName = arr[arr.length - 1];
    //     const imgNameWithoutExtension = imgName.substr(0, imgName.length - 4);
    //     return imgNameWithoutExtension;
    // }

    console.log(url);

    const style = css`
        position: relative;
        background-image: url("${url}");
        background-size: 150px;
        background-repeat: no-repeat;
        background-size: cover;
        width: 150px;
        height: 150px;
        margin: 2px;
    `;

    const styleOverlay = css`
        position: absolute;
        left: 0;
        bottom: 0;
        width: inherit;
        height: inherit;
        vertical-align: center;
        text-decoration: none;
        z-index: 2;
        color: white;
        background-color: black;
        opacity: 0;
        &:hover {
            opacity: 0.7;
        }
        transition: 0.4s;
    `;

    return (
        <Link to={"/" + date}>
            <div className={style}>
                {/* <div className={styleOverlay}></div> */}
                <div className={styleOverlay}>{date}</div>
            </div>
        </Link>
    );
}