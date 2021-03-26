import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

type Props = {
    data: {
        [key: string]: string
    }
}

export default function PicturePage({ data }: Props) {

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
        ;`,
        picture: css`
            max-width: inherit;
            max-height: 500px;
            object-fit: contain;
        `,
        p: css`
            text-align: justify;
            font-size: 1.2em;
        `
    };

    return (
        <div>
            <Link to="/">
                <h3 className={style.back}>&#60; Back</h3>
            </Link>
            <div className={style.wrapper}>   
                <main className={style.main}>
                    <h1 className={style.header}>{data.title}</h1>
                    <img 
                        className={style.picture}
                        src={data.url}
                        alt="APOD"
                    />
                    <p className={style.p}>{data.explanation}</p>
                    {data.copyright ? <p>The photo taken by {data.copyright}</p> : ''}
                </main>
            </div>
        </div>
    )
}