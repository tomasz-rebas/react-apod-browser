import { css } from '@emotion/css';
import SadEmoji from './SadEmoji';

type Props = {
    fetchError: string
}

export default function FetchError({ fetchError }: Props) {    

    const style = {
        wrapper: css`
            display: flex;
            justify-content: center;
        `
    }

    return (
        <div className={style.wrapper}>
            <SadEmoji/>
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