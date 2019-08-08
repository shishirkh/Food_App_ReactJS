import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    state={
        ingredient:{
            salad:0,
            bacon:0 ,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    } 
    
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={...this.state.ingredient};
        updatedIngredient[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredient: updatedIngredient
        });
        let sum=0;
        for (let i in updatedIngredient){
            sum=sum+updatedIngredient[i];
        }
        this.setState({purchasable:sum>0});
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if(oldCount<=0)
            return;
        const updatedCount=oldCount-1;
        const updatedIngredient={...this.state.ingredient};
        updatedIngredient[type]=updatedCount;
        const priceSubtraction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice-priceSubtraction;

        this.setState({
            totalPrice:newPrice,
            ingredient:updatedIngredient
        });
        let sum=0;
        for (let i in updatedIngredient){
            sum=sum+updatedIngredient[i];
        }
        this.setState({purchasable:sum>0});
    }
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler=()=>{
        alert('You Continue!')
    }
    render(){
        const disabledInfo={
            ...this.state.ingredient
        }
        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0?true:false;
        }        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredient={this.state.ingredient}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientSubtracted={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                />    
            </Aux>
        );
    }
}
export default BurgerBuilder;
