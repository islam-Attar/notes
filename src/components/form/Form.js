import React from "react";
import "./Form.scss";
import { useState } from "react";

function Form(props) {
    
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const handleMethod = (e) => {
        e.preventDefault();
        setMethod(e.target.value);
    }
    const handleURL = (event) => {
        event.preventDefault()
        setUrl(event.target.value);
    }
    const handleBody = (event) => {
        event.preventDefault()
        setBody(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            method: method,
            url: url,
            body: null
        }
        let action = {
            payload :{
                method: data.method,
                url: data.url,
                body: data.body,
            }
        }
        props.addHistory(action);
        if (body) {
            data.body = body;
        }
        props.handelApi(data);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" id="name" placeholder="http://api.url.here" onChange={handleURL} />
            <button type="submit" className="btn">GO!</button>
            <div className='split'>
                <div className="crud">
                    <button type="button" className="btn" value='GET' onClick={handleMethod}>GET</button>
                    <button type="button" className="btn" value='POST' onClick={handleMethod}>POST</button>
                    <button type="button" className="btn" value='PUT' onClick={handleMethod}>PUT</button>
                    <button type="button" className="btn" value='DELETE' onClick={handleMethod}>DELETE</button>
                </div>

                <div>
                    <textarea class="textArea" name="textArea" rows="4" cols="50" onChange ={handleBody}>
                    </textarea>
                </div>
            </div>


        </form>
    );
}
export default Form;