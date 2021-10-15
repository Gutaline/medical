import React from 'react'

export default function InfoTable(props) {
    return (
        <div className = "info-table">
            <div className = "info-table_text">{props.children}</div>
        </div>
    )
}
