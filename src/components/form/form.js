'use strict';
import './form.css';
import {useState} from 'react';
const Form = (props) => {
    const [method , setMethod] = useState('GET');
    const [url , setUrl] = useState('');
    const handleURL = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    }
    const handleMethod = (e) => {
        e.preventDefault();
        setMethod(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            method: method,
            url: url
    }
        props.getForm(data);
}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" id="name" placeholder="http://api.url.here" onChange={handleURL}/>
            <button type="submit" className="btn">GO!</button>
<div className='split'>
            <div className="crud">
                <button type="button" className="btn" value = 'GET'    onClick={handleMethod}>GET</button>
                <button type="button" className="btn" value = 'POST'   onClick={handleMethod}>POST</button>
                <button type="button" className="btn" value = 'PUT'    onClick={handleMethod}>PUT</button>
                <button type="button" className="btn" value = 'DELETE' onClick={handleMethod}>DELETE</button>
            </div>

           <div>
            <textarea class="textArea" name="textArea" rows="4" cols="50">
            </textarea>
            </div>
            </div>


        </form>
    );
}
export default Form;