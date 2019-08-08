import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props)=>{
    let ti1=[];
    for (let i in props.ingredient){
        console.log(i);
        console.log(props.ingredient[i]);
        for(let j=0;j<props.ingredient[i];j++){
            ti1.push(
                <BurgerIngredient key={i+j} type={i}/>
            )
        }
    }
    if(ti1.length===0)
    {
        ti1=<p>please staring</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ti1}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger;