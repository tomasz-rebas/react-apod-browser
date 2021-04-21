import { css } from '@emotion/css';

export default function MediaPlaceholder() {

    const style = {
        outline: css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border: 3px solid #aaa;
            border-radius: 50%;
            width: 60px;
            height: 60px;
        `,
        triangle: css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent; 
            border-left: 15px solid #aaa; 
        `
    }

    return (
        <div className={style.outline}>
            <div className={style.triangle}></div>
        </div>
    )
}