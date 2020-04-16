import * as actionTypes from './actions';

//sync code
export const saveResult = (result) => {

    return {
    type: actionTypes.STORE_RESULT,
    result: result
  }

};

//async code lesson 289, rewatch again !
export const  storedResult = (value) => {
  //we get dispatch thansk to thunk redux
  return (dispatch, getState) => {
      setTimeout(() => {
        const oldCounter = getState().ctr.counter;
        dispatch(saveResult(value));

       },2000);

  }

};



export const  deleteResult = (value) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: value
  }
};

