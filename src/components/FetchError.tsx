import { useEffect } from 'react';
import { css } from '@emotion/css';

type Props = {
    fetchError: string
}

export default function FetchError({ fetchError }: Props) {    
    
    const badSound = new Audio(process.env.PUBLIC_URL + 'bad.mp3');
    badSound.volume = 0.1;

    useEffect(() => {
        badSound.play()
    }, []);

    const style = {
        wrapper: css`
            display: flex;
            justify-content: center;
        `,
        image: css`
            width: 180px;
            height: 180px;
        `
    }

    return (
        <div className={style.wrapper}>
            <img 
                src={process.env.PUBLIC_URL + 'face.png'}
                className={style.image}
            />
            <div>
                <h2>Whoops!</h2> 
                <h3>Something went wrong.</h3>
                <br/>
                {fetchError}
                <br/>
                Please change your date range and try again.
            </div>
        </div>
    )
}