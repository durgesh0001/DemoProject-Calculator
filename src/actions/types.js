import {Alert} from 'react-native';
import {Toast} from 'native-base';
import {Base64} from '../components/common'
//common
export const LOADER_START = 'loader_start';
export const LOADER_END = 'loader_end';
export const SET_INPUT_ARRAY = 'set_input_array';
export const SET_INPUT_VALUE = 'set_input_value';




export const showToast=(type="success",message)=>
{
    if(type =='success')
    {
    Toast.show({
        text: message,
        position: 'bottom',
        type:type,
        duration:4000
    });
    }
    else
    {
        Toast.show({
            text: message,
            position: 'bottom',
            duration:4000
        });

    }

}





















