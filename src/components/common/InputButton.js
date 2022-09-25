import React from 'react';
import {TextInput,Text,View,TouchableOpacity } from 'react-native';


const InputButton =({value,onPress,key})=>
{
    return (
        <TouchableOpacity onPress={onPress}  key={key} style={styles.inputButton}
        >
            <Text style={styles.inputButtonText}>{value}</Text>
        </TouchableOpacity>
    )

}
const styles = {
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
}

export {InputButton};
