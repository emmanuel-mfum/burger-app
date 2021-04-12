import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'



const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //  Returns  a list of the keys [salad, bacon, cheese, meat]
    .map(igKey => { // for each value (like salad) we execute a function and the result of that function is then added to a new array.
        return [...Array(props.ingredients[igKey])].map((_,i)=>{ // make an array of empty spots, number is the value of key, then on that array map and take index
           return <BurgerIngredient key={igKey + i} type={igKey}/>; // pass the index into this JSX element as prop (unique key)
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
  if (transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients!</p>

  }

    
    return(
        <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom"/>
        </div>

    );

}


export default burger;