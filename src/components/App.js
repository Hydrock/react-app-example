import React, { useState } from "react";

import { Experiment } from './Experiment';
import { WithChildren } from './WithChildren';

import { MyContext } from './context';

import '../styles/App.css';

export function App() {
    const [isVisible, setVisability] = useState(false);
    
    // const [theme, setTheme] = useState('light');
    let theme = 'light';
    const [customContext, setCustomContext] = useState(
        {
            theme: theme,
            toggleTheme: () => {
                if (theme == 'light') {
                    theme = 'dark';
                } else {
                    theme = 'light';
                }

                setCustomContext({
                    ...customContext,
                    theme,
                })
            }
        }
    );

    return (
        <MyContext.Provider value={ customContext }>
            <div>
                <h1>
                    React App Example
                </h1>
                <button onClick={() => { setVisability(!isVisible) }}>
                    show/hide
                </button>
                <WithChildren text={1}>
                    <WithChildren text={2}>
                        <WithChildren text={3}>
                            <Xxx>
                                { isVisible && (
                                    <Experiment />
                                )}
                            </Xxx>
                        </WithChildren>
                    </WithChildren>
                </WithChildren>
            </div>
        </MyContext.Provider>
    );
}


const Xxx = (props) => {
    return (
        <div>
            Xxx
            { props.children }
        </div>
    )
}
