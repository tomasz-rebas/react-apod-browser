import { css, keyframes } from '@emotion/css';

export default function LoadingDots() {

    const animations = {
        loading: keyframes`
            from, to {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }
        `,
        fadeIn: keyframes`
            from {
                opacity: 0;
            }

            20% {
                opacity: 0
            }

            to {
                opacity: 1;
            }
        `
    }

    const style = {
        dots: css`
            height: 150px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                display: inline-block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #ccc;
                margin-left: 3px;
                margin-right: 3px;
            }

            animation: ${animations.fadeIn} 1s ease;

            span:nth-child(1) {
                animation: ${animations.loading} 1.5s ease infinite;
            }
            
            span:nth-child(2) {
                animation: ${animations.loading} 1.5s ease infinite;
                animation-delay: 0.3s;
            }

            span:nth-child(3) {
                animation: ${animations.loading} 1.5s ease infinite;
                animation-delay: 0.6s;
            }
        `
    };

    return (
        <div className={style.dots}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}