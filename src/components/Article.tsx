import { css } from '@emotion/css';
import getDateString from '../functions/getDateString';

type Props = {
    data: {
        [key: string]: string
    }
}

export default function Article({ data }: Props) {

    const style = {
        wrapper: css`
            display: flex;
            justify-content: center;
            margin-left: 10px;
            margin-right: 10px;
        `,
        content: css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 700px;
        `,
        header: css`
            text-align: center;
        `,
        picture: css`
            opacity: 0;
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
            background: url(${data.url}) center center no-repeat;
            background-size: contain;
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

            @media (max-width: 640px) {
                text-align: left;
            }
        `
    };

    return (
        <div className={style.wrapper}>   
            <div className={style.content}>
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
            </div>
        </div>
    )
}