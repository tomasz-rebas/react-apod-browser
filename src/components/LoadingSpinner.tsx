import { css, keyframes } from '@emotion/css';

export default function LoadingSpinner() {

    const animations = {
        rotationClockwise: keyframes`
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            50% {
                transform: translate(-50%, -50%) rotate(180deg);
            }

            to {
                transform: translate(-50%, -50%) rotate(359deg);
            }
        `,
        rotationCounterClockwise: keyframes`
            from {
                transform: translate(-50%, -50%) rotate(0deg);
            }

            50% {
                transform: translate(-50%, -50%) rotate(-180deg);
            }

            to {
                transform: translate(-50%, -50%) rotate(-359deg);
            }
        `
    }

    const bright = 'rgba(150, 150, 150, 0.9)';
    const dark = 'rgba(0, 0, 0, .1)';

    const thickBorders = `
        border: 12px solid ${bright};
        border-top-color: ${dark};
        border-right-color: ${dark};
        border-bottom-color: ${dark};
    `;

    const thinBorders = `
        border: 6px solid ${bright};
        border-top-color: ${dark};
        border-right-color: ${dark};
        border-bottom-color: ${dark};
    `;

    const style = {
        spinner: css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            span {
                position: absolute;
                display: inline-block;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                border-radius: 100%;
            }

            @media (max-height: 600px) {
                top: 60%;
            }
        `,
        outerCircle: css`
            width: 300px;
            height: 300px;
            ${thickBorders}
            animation: ${animations.rotationClockwise} 3s infinite linear;

            @media (max-width: 400px) {
                width: 150px;
                height: 150px;
                ${thinBorders}
            }

            @media (max-height: 600px) {
                width: 150px;
                height: 150px;
                ${thinBorders}
            }
        `,
        midCircle: css`
            width: 240px;
            height: 240px;
            ${thickBorders}
            animation: ${animations.rotationCounterClockwise} 2s infinite linear;

            @media (max-width: 400px) {
                width: 120px;
                height: 120px;
                ${thinBorders}
            }

            @media (max-height: 600px) {
                width: 120px;
                height: 120px;
                ${thinBorders}
            }
        `,
        innerCircle: css`
            width: 180px;
            height: 180px;
            ${thickBorders}
            animation: ${animations.rotationClockwise} 1s infinite linear;

            @media (max-width: 400px) {
                width: 90px;
                height: 90px;
                ${thinBorders}
            }

            @media (max-height: 600px) {
                width: 90px;
                height: 90px;
                ${thinBorders}
            }
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