import React from 'React';
import 'bulma/css/bulma.css';
import './FormFields.css';

function FormFields (props){
    return(
        <div className='container'>

        <form>
            <label>
                {props.label}
                </label>
                <br></br>
            <input type="input" type={props.type} placeholder={props.placeholder}/>
        </form>
        </div>
    
    );
}
export default FormFields;