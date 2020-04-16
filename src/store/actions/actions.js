export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//actions creators, a function that retunrs an action, jus that
//this action creator function will recive any payload(some addtion data we want to send other than type property, which is mandatory)
 export const  increment = () => {
  //we return a JS object as action, therefore it has to have a type
  return {
    type: INCREMENT
  }
};

//the name of the action creators should match the name given to the actions itself
export const  decrement = () => {
  return {
    type: DECREMENT
  }
};


export const  add = (value) => {
  return {
    type: ADD,
    val: value
  }
};


export const  subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value
  }
};


//sync code
export const saveResult = (result) => {
    return {
    type: STORE_RESULT,
    result: result
  }

};

//async code lesson 289, rewatch again !
export const  storedResult = (value) => {
  //we get dispatch thansk to thunk redux
  return dispatch => {
      setTimeout(() => {
        dispatch(saveResult(value));

       },2000);

  }

};



export const  deleteResult = (value) => {
  return {
    type: DELETE_RESULT,
    resultElId: value
  }
};


