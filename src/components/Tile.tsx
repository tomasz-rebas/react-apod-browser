import React from 'react';
import { css } from '@emotion/css';

type Props = {
    url: string
}

export default function Tile( { url }: Props ) {

    function getLinkLocation(fullUrl: string) {
        const arr = fullUrl.split('/');
        const imgName = arr[arr.length - 1];
        const imgNameWithoutExtension = imgName.substr(0, imgName.length - 4);
        return imgNameWithoutExtension;
    }

    console.log(getLinkLocation(url));
    console.log(url);

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