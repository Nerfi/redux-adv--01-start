import * as actionTypes from './actions';

//actions creators, a function that retunrs an action, jus that
//this action creator function will recive any payload(some addtion data we want to send other than type property, which is mandatory)
 export const  increment = () => {
  //we return a JS object as action, therefore it has to have a type
  return {
    type: actionTypes.INCREMENT
  }
};

//the name of the action creators should match the name given to the actions itself
export const  decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
};


export const  add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value
  }
};


export const  subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  }
};
