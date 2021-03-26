import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

type Props = {
    data: {
        [key: string]: string
    }
}

export default function PicturePage({ data }: Props) {

    const styleWrapper = css`
        display: flex;
        justify-content: center;
    `;

    const styleMain = css`
        max-width: 700px;
    `;

    const styleBack = css`
        color: #ddd;
    ;`;

    const styleImage = css`
        max-width: inherit;
        max-height: 700px;
    `;

    const styleParagraph = css`
        text-align: justify;
        font-size: 1.2em;
    `;

    return (
        <div>
            <Link to="/">
                <h3 className={styleBack}>&#60; Back</h3>
            </Link>
            <div className={styleWrapper}>   
                <main className={styleMain}>
                    <h1>{data.title}</h1>
                    <img 
                        className={styleImage}
                        src={data.url}
                        alt="APOD"
                    />
                    <p className={styleParagraph}>{data.explanation}</p>
                    <p>The photo taken by {data.copyright}</p>
                </main>
            </div>
        </div>
    )
}