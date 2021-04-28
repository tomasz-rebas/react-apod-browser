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
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
            &:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 50%;
                ${darkMode ? `
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);` : ``}
            }
        `,
        input: css`
            
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
                <span className={style.slider}></span>
            </label>
        </div>
    );
}