'use strict';
import './form.css';
const Form = () => {
    return (
        <form>
            <input type="text" className="form-control" id="name" placeholder="http://api.url.here" />
            <button type="submit" className="btn">GO!</button>
<div className='split'>
            <div className="crud">
                <button type="button" className="btn">GET</button>
                <button type="button" className="btn">POST</button>
                <button type="button" className="btn">PUT</button>
                <button type="button" className="btn">DELETE</button>
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