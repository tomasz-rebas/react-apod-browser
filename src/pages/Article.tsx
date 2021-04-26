import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import getDateString from '../functions/getDateString';
import { useEffect } from 'react';

type Props = {
    data: {
        [key: string]: string
    }
}

export default function PicturePage({ data }: Props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const style = {
        wrapper: css`
            display: flex;
            justify-content: center;
        `,
        main: css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 700px;
        `,
        header: css`
            text-align: center;
        `,
        back: css`
            color: #ddd;
            margin-left: 15px;
        ;`,
        picture: css`
            object-fit: contain;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        `,
        pictureWrapper: css`
            max-width: inherit;
            max-height: 500px;
            text-align: center;
        `,
        iframeWrapper: css`
            text-align: center;
        `,
        iframe: css`
            width: 560px;
            height: 315px;
            
            @media (max-width: 600px) {
                width: 300px;
                height: 240px;
            }
        `,
        p: css`
            text-align: justify;
            font-size: 1.2em;
        `
    };

    return (
        <div>
            <Link to="/home">
                <h3 className={style.back}>&#60; Back</h3>
            </Link>
            <div className={style.wrapper}>   
                <main className={style.main}>
                    <h1 className={style.header}>
                        {data.title}
                    </h1>
                    <h3 className={style.header}>
                        {getDateString(data.date, 'D Month Yr')}
                    </h3>
                    {
                        data.media_type === 'image' ?
                        <div className={style.pictureWrapper}>
                            <img 
                                className={style.picture}
                                src={data.url}
                                alt="APOD"
                            />
                        </div> :
                        <div className={style.iframeWrapper}>
                            <iframe 
                                className={style.iframe}
                                src={data.url}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title={data.title}
                            >
                            </iframe>
                        </div>
                    }
                    
                    <p className={style.p}>{data.explanation}</p>
                    {data.copyright ? <p>The photo taken by {data.copyright}</p> : ''}
                </main>
            </div>
        </div>
    )
}