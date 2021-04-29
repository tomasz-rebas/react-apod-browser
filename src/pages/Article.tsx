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
        linkWrapper: css`
            &:first-child {
                flex: 1;
                text-align: left;
            }
            &:last-child {
                flex: 1;
                text-align: right;
            }
        `,
        link: css`
            display: inline-block;
            color: ${darkMode ? `#333` : `#ddd`};
            padding-left: 15px;
            padding-right: 15px;
            text-align: center;
            text-decoration: none;
            &:visited {
                color: ${darkMode ? `#333` : `#ddd`};
            }
            span {
                @media (max-width: 380px) {
                    display: none;
                }
            }
        ;`,
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
        `,
        navigation: css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background-color: ${darkMode ? `#ddd` : `#333`};
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            min-height: 60px;
        `,
        hidden: css`
            visibility: hidden;
        `
    };

    return (
        <div>
            <nav className={style.navigation}>
                <div className={style.linkWrapper}>
                {
                    adjacentArticles.previous ?
                    <Link to={`/${adjacentArticles.previous}`} className={style.link}>
                        <h3>&#60;<span> Previous</span></h3>
                    </Link> :
                    <div className={style.link + ' ' + style.hidden}>     
                        <h3>&#60;<span> Previous</span></h3>
                    </div>
                }
                </div>
                <div className={style.linkWrapper}>
                    <Link to="/home" className={style.link}>
                        <h3>Homepage</h3>
                    </Link>
                </div>
                <div className={style.linkWrapper}>
                {
                    adjacentArticles.next ?
                    <Link to={`/${adjacentArticles.next}`} className={style.link}>
                        <h3><span>Next </span>&#62;</h3>
                    </Link> :
                    <div className={style.link + ' ' + style.hidden}>
                        <h3><span>Next </span>&#62;</h3>
                    </div>
                }
                </div>
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