import { css } from '@emotion/css';
import { useContext } from 'react';
import { ThemeContext } from '../components/Routes';

type Props = {
    setDarkMode: Function
}

export default function DarkModeSwitch({ setDarkMode }: Props) {

    const darkMode = useContext(ThemeContext);

    const style = {
        switch: css`
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin-right: 10px;
        `,
        slider: css`  
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${darkMode ? `#666` : `#aaa`};
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
        `,
        circle: css `
            position: absolute;
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: ${darkMode ? `#ddd` : `#333`};
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
            ${darkMode ? `
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);` : ``}
        `,
        moon: css`
            background-color: ${darkMode ? `#ff6200` : `orange`};
            -webkit-transition: .4s;
            transition: .4s;
            position: absolute;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            top: 4px;
            left: 4px;
        `,
        shadow: css`
            background-color: ${darkMode ? `#ddd` : `#333`};
            -webkit-transition: .4s;
            transition: .4s;
            position: absolute;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            bottom: 5px;
            left: 5px;
        `,
        input: css`
            visibility: hidden;
        `
    }

    return (
        <div>
            <label className={style.switch}>
                <input 
                    className={style.input}
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className={style.slider}>
                    <span className={style.circle}>
                        <span className={style.moon}>
                            <span className={style.shadow}></span>
                        </span>
                    </span>
                </span>
            </label>
        </div>
    );
}