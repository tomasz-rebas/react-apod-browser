import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import getDateString from '../functions/getDateString';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../components/Routes';

type Props = {
    data: {
        [key: string]: string
    },
    adjacentArticles: {
        previous: string | null,
        next: string | null
    }
}

export default function PicturePage({ data, adjacentArticles }: Props) {

    const darkMode = useContext(ThemeContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const style = {
        wrapper: css`
            display: flex;
            justify-content: center;
            margin-left: 6px;
            margin-right: 6px;
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
        link: css`
            color: ${darkMode ? `#333` : `#ddd`};
            margin-left: 15px;
            margin-right: 15px;
            width: 100px;
            text-align: center;
            text-decoration: none;
            &:visited {
                color: ${darkMode ? `#333` : `#ddd`};
            }
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
        `,
        navigation: css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background-color: ${darkMode ? `#ddd` : `#333`};
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            min-height: 60px;
            
            @media (max-width: 410px) {
                flex-direction: column;
                align-items: center;
            }
        `
    };

    return (
        <div>
            <nav className={style.navigation}>
                {
                    adjacentArticles.previous ?
                    <Link to={`/${adjacentArticles.previous}`} className={style.link}>
                        <h3>&#60; Previous</h3>
                    </Link> :
                    <div className={style.link}></div>
                }
                <Link to="/home" className={style.link}>
                    <h3>Homepage</h3>
                </Link>
                {
                    adjacentArticles.next ?
                    <Link to={`/${adjacentArticles.next}`} className={style.link}>
                        <h3>Next &#62;</h3>
                    </Link> :
                    <div className={style.link}></div>
                }
            </nav>
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