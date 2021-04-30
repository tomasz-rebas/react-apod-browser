import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../components/Routes';
import Article from '../components/Article';

type Props = {
    data: {
        [key: string]: string
    },
    adjacentArticles: {
        previous: string | null,
        next: string | null
    }
}

export default function ArticlePage({ data, adjacentArticles }: Props) {

    const darkMode = useContext(ThemeContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const style = {
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
            <main>
                <Article data={data}/>
            </main>
        </div>
    )
}