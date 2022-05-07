import React from "react";
import "./Results.scss"
// import JSONPretty from 'react-json-pretty';

function Result(props) {
   
        return (
            <div className="result">
                <div className="api">
                    <p><strong>{`${props.method} `}</strong></p>
                    <p>{props.url}</p>
                </div>
                <div className="body">
                    {/* <JSONPretty data={props.header} />
                    <JSONPretty data={props.data} /> */}
                </div>
            </div>
        )
}
export default Result;