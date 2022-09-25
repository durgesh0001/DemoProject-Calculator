import {Actions} from 'react-native-router-flux';
import {LOADING_END,LOADER_START,SET_INPUT_ARRAY,SET_INPUT_VALUE} from '../types'
import _ from 'lodash';
import axios from 'axios';


/*
   @Method : getInputButtonsArray
   @Params :
   @Returns : *
   */
export const getInputButtonsArray = () => {
    return (dispatch) => {
        // Define the input buttons that will be displayed in the calculator.
        const inputArray = [
            [1, 2, 3, '/'],
            [4, 5, 6, '*'],
            [7, 8, 9, '-'],
            [0, '.', 'AC', '+'],
            ['CALCULATE'],

        ];
        dispatch({type:SET_INPUT_ARRAY,payload:inputArray});

    };
}


/*
   @Method : setInputValueAndItsCaluculation
   @Params :
   @Returns : *
   */
export const setInputValueAndItsCaluculation = (text) => {
    return (dispatch) => {
        dispatch({type:SET_INPUT_VALUE,payload:text});
    };
}


/*
   @Method : requestSuccess
   @Params :
   @Returns : *
   */
const requestSuccess = (dispatch) => {
    dispatch({type: LOADING_END});

};
/*
   @Method : requestFail
   @Params :
   @Returns : *
   */
const requestFail = (dispatch) => {
    dispatch({type: LOADING_END});

};


