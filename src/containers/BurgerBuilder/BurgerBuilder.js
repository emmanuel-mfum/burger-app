import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';



const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7


}
class BurgerBuilder extends Component {
     
    constructor(props) {
       super(props);

         this.state = {
            ingredients:null,
            totalPrice: 4,
            purchasable:false,
            purchasing:false,
            loading:false,
            error:false
         }

         this.addIngredientHandler = this.addIngredientHandler.bind(this);
         this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
         this.purchaseHandler = this.purchaseHandler.bind(this);
         this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
         this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
         this.resetIngredientHandler = this.resetIngredientHandler.bind(this)
    } 

    componentDidMount(){ // fetching the inital number of ingredients from a Firebase database
        axios.get('https://burger-app-87735-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients:response.data})
        })
        .catch(error =>{
            this.setState({error:true})
        });
    }

    updatePurchaseState (ingredients) {
       
        const sum = Object.keys(ingredients)
            .map(igKey=> {
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        
        this.setState({
            purchasable: sum > 0 // Will be either true or false
        })
    }


    addIngredientHandler (type) {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients); // to make sure we get the updated version we pass in the parameter


    }

    removeIngredientHandler (type) {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
               return ;
        }
        const updatedCount = oldCount - 1 ;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
        

    }

    purchaseHandler () {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancelHandler () {
        this.setState({
            purchasing:false
        });
    }

    purchaseContinueHandler () {

        //alert('You continue');

        this.setState({
            loading:true
        });
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice, // not a setup of a real app, IRL we need to calculate the price on the server
            customer: {
                name: 'Emmanuel',
                address: {
                    street:'Test Street',
                    zipcode: 'WR56GH',
                    country: 'Canada'

                },

                email: 'test@mail.com'
                
            },
            deliveryMethod:'fastest'

        }
        axios.post('/orders.json',order)   // for Firebase, you need to add .json
        .then(response => this.setState({loading:false, purchasing:false})) // when the request is done, valid or not we stop "loading" and purchasing becomes false in order to close the Modal
        .catch(error => this.setState({loading:false, purchasing:false})); // we do the same even if there is an error and and purchasing becomes false in order to close the Modal


    }

    resetIngredientHandler () {
        this.setState({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable:false,
            purchasing:false
        })
    }

    
    

    /* state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    } */

    render () {

        const disabledInfo ={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0; // {salad: true, meat:false, ...}
        }
        
        let orderSummary = null;


        let burger = this.state.error ? <p>Ingredients cannot be loaded </p> : <Spinner></Spinner> ; // by default the burger is a spinner or if there is an error in the GET method a p element
        
        if (this.state.ingredients){ // if the ingredients are not null, then we can make our Burger
            burger = (
                <>

                   <Burger ingredients={this.state.ingredients} />
                   <BuildControls 
                       ingredientAdded={this.addIngredientHandler} 
                       ingredientRemoved={this.removeIngredientHandler}
                       disabled={disabledInfo}
                       purchasable={this.state.purchasable}
                       price={this.state.totalPrice}
                       ordered={this.purchaseHandler}
                       reset={this.resetIngredientHandler}
                    />
                </> 
            );

            orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}></OrderSummary>


        }

        if (this.state.loading) {
            orderSummary = <Spinner/>; // conditional check to see if the state is loading
        
        }
      
        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
                   {orderSummary}
                </Modal>
                {burger}

                
            </>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);