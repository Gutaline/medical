import React from 'react';

function Button(props) {
    return (
        <div onClick={props.onClick} className="custom-btn">
            <div className="custom-btn_arrow">
                <span>{props.symbol}</span>
            </div>
            <div className="custom-btn_text">{props.children}</div>
        </div>
    );
}

export default Button;
