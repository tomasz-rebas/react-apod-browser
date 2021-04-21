import { css, keyframes } from '@emotion/css';

export default function LoadingSpinner() {

    const animations = {
        circleRotation: keyframes`
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            50% {
                transform: translate(-50%, -50%) rotate(180deg);
            }

            to {
                transform: translate(-50%, -50%) rotate(359deg);
            }
        `
    }

    const bright = 'rgba(150, 150, 150, 0.9)';
    const dark = 'rgba(0, 0, 0, .1)';

    const style = {
        spinner: css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;

            span {
                position: absolute;
                display: inline-block;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 100%;
            }
        `,
        outerCircle: css`
            width: 300px;
            height: 300px;
            border: 12px solid ${bright};
            border-top-color: ${dark};
            border-right-color: ${dark};
            border-bottom-color: ${dark};
            animation: ${animations.circleRotation} 3s infinite;
        `,
        midCircle: css`
            width: 240px;
            height: 240px;
            border: 12px solid ${bright};
            border-left-color: ${dark};
            border-right-color: ${dark};
            border-bottom-color: ${dark};
            animation: ${animations.circleRotation} 2.5s infinite;
        `,
        innerCircle: css`
            width: 180px;
            height: 180px;
            border: 12px solid ${bright};
            border-top-color: ${dark};
            border-left-color: ${dark};
            border-bottom-color: ${dark};
            animation: ${animations.circleRotation} 2s infinite;
        `
    };

    return (
        <div className={style.spinner}>
            <span className={style.outerCircle}></span>
            <span className={style.midCircle}></span>
            <span className={style.innerCircle}></span>
        </div>
    );
}