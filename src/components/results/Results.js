import React from "react";
import JSONPretty from "react-json-pretty";
import "./Results.scss";

function Result(props) {
    if (!props.loading){
        return (
            <div className="result">
                <div className="api">
                    <p><strong>{props.method}</strong></p>
                    <p>{props.url}</p>
                </div>
                <div className="body">
                    <div>
                    <JSONPretty data={props.header} />
                    <JSONPretty data={props.data} /> 
                    </div>
                </div>
            </div>
        )

    }
    else{
        return (
            <div className="result">
                <div className="api">
                    <p><strong>{`${props.method} `}</strong></p>
                    <p>{props.url}</p>
                </div>
                <div className="body">
                    <p>Loading...</p>
                </div>
            </div>
        )
    }
        
}
export default Result;