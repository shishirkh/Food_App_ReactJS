import React from 'react';
import classes from './FoodJoint.css';

const foodJoint=(props)=>{
    let idealFor=props.idealFor;
    if(idealFor==="family")
    {
        idealFor="Ideal for family get togethers";
    }
    else if(idealFor==="friends")
    {
        idealFor="A cool place to hangout with friends";
    }
    else if(idealFor==="dates")
    {
        idealFor="Ideal for Dates!"
    }

    return (
        <div className={classes.R_entry}>
            <p className={classes.textClass} onClick={props.click}>{props.name} ~ {props.type}</p>
            <p className={classes.textClass} onClick={props.click}>{idealFor}</p>
            <input className={classes.inputTextClass} type="text" onChange={props.changedName} value={props.name}/>
            <input className={classes.inputTextClass} type="text" onChange={props.changedType} value={props.type}/>
            <input className={classes.inputTextClass} type="text" onChange={props.changedIdealFor} value={props.idealFor}/>
    
        </div>
    )
};
export default foodJoint;