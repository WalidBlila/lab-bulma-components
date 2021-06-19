import React from 'React';
import 'bulma/css/bulma.css';
import './CoolButton.css';


function CoolButton (props) {
    let classes =`button`
    if (props.className){
        classes+= " " +props.className
    }
if (props.isDanger){
    classes+= " " +'is-danger'
}

if (props.isSmall){
    classes+= " " +'is-small'
}

if (props.isSuccess){
    classes+= " " +'is-success'
}

    return (
        <div>
<button className = {classes}>
    {props.children}
</button>
        </div>
    )
}

export default CoolButton;