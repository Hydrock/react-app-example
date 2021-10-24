import React, { useEffect, useState, useContext } from "react";

import { MyContext } from './context';

export function Experiment(props) {
    const [count, setCount] = useState(0);
    const { toggleTheme, theme } = useContext(MyContext);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;

        return function() {
            document.title = "Эксперимент спрятан"
        }
    });

    return (
        <div>
            <span>
                Experiment
            </span>
            <div>
                <button onClick={() => {
                    // setCount(count + 1);
                    toggleTheme()
                }}>
                    Нажми на меня ({ theme })
                </button>
            </div>
        </div>
    );
}
