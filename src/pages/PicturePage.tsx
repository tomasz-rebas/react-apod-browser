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
            max-width: 700px;
        `,
        back: css`
            color: #ddd;
        ;`,
        picture: css`
            max-width: inherit;
            max-height: 700px;
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
                    <h1>{data.title}</h1>
                    <img 
                        className={style.picture}
                        src={data.url}
                        alt="APOD"
                    />
                    <p className={style.p}>{data.explanation}</p>
                    <p>The photo taken by {data.copyright}</p>
                </main>
            </div>
        </div>
    )
}