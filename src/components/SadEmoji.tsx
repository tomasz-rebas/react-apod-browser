import { css } from '@emotion/css';

export default function SadEmoji() {

    const style = {
        head: css`
            position: relative;
            border: 3px solid #ddd;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            margin: 20px;
        `,
        eyes: css`
            display: flex;
            justify-content: space-around;
            margin-top: 35px;
            margin-left: 20px;
            margin-right: 20px;
            span {
                border: 8px solid #ddd;
                border-radius: 50%;
                display: inline-block;
                width: 0px;
                height: 0px;
            }
        `,
        mouth: css`
            border: 3px solid #ddd;
            border-bottom-color: rgba(0, 0, 0, 0);
            border-left-color: rgba(0, 0, 0, 0);
            border-right-color: rgba(0, 0, 0, 0);
            border-radius: 50%;
            width: 80px;
            height: 80px;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
        `
    }

    return (
        <div className={style.head}>
            <div className={style.eyes}>
                <span></span>
                <span></span>
            </div>
            <div className={style.mouth}></div>
        </div>
    )
}