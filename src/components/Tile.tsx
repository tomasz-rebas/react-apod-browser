import React from 'react';
import { css } from '@emotion/css';

type Props = {
    url: string
}

export default function Tile( { url }: Props ) {

    const style = css`
        width: 150px;
        height: 150px;
        margin: 2px;
        object-fit: cover;
    `;

    return (
        <div>
            <img 
                src={url}
                alt="APOD"
                className={style}
            />
        </div>
    );
}