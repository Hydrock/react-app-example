import React from "react";

export function WithChildren(props) {
    // console.log('WithChildren render - ', props.text)

    return (
        <div style={{ paddingLeft: 20 }}>
            <span>
                WithChildren { `- ${props.text}` || '' }
            </span>
            { props.children }
        </div>
    );
}
