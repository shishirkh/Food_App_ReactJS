import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredient)
    .map(igKey=>{
        return (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>
                :{props.ingredient[igKey]}
            </li>);
    })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the sollowing</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
            <p>continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;