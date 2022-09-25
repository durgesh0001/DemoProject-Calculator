import {LOADING_END,LOADER_START,SET_INPUT_ARRAY,SET_INPUT_VALUE} from '../../actions/types';
const INITIAL_STATE = {inputArray:[],loading:false,inputValue:""};
export default (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {   case LOADER_START:
            return {...state,loading:true};
        case LOADING_END:
            return {...state,loading:false};
        case SET_INPUT_ARRAY:
            return {...state,loading:false,inputArray:action.payload};
        case SET_INPUT_VALUE:
            return {...state,loading:false,inputValue:action.payload};
        default:
            return state;
    }
}
