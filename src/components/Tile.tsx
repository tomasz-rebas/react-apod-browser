import React from 'react';

type Props = {
    url: string
}

export default function Tile( { url }: Props ) {
    return (
        <div>
            <img src={url} alt="APOD"/>
        </div>
    );
}