import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputButton} from '../common';
import {View,Text} from 'react-native';
import {getInputButtonsArray,setInputValueAndItsCaluculation} from '../../actions';


let calculateValue = [];

class Home extends Component {

    //div,mul,sub,plus


    componentWillMount(){
        this.props.getInputButtonsArray();
    }

    renderContainer(){
        if(this.props.inputValue && this.props.inputValue.length>5 ){
            return (
                <View style={styles.displayContainer}>
                    <Text style={{color:"#fff",fontSize:30,textAlign: 'right'}}>{this.props.inputValue}</Text>
                </View>
            );
        }
        else{
            return (
                <View style={styles.displayContainer}>
                    <Text style={{color:"#fff",fontSize:100,textAlign: 'right'}}>{this.props.inputValue}</Text>
                </View>
            );

        }
    }

    render() {
        return (
            <View style={styles.rootContainer}>
                {this.renderContainer()}

                <View style={styles.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        )
    }

    /*
@Method : onClickInputButtons
@Params :
@Returns : *
*/
    onClickInputButtons(input){
        let {inputValue} = this.props;
        if(input == "AC"){
            inputValue = ""
            this.props.setInputValueAndItsCaluculation(inputValue);
            calculateValue =[];
        }
        else if(input == "/" && calculateValue.length == 0){
            calculateValue[0] = inputValue;
            calculateValue[1] = input;
            this.props.setInputValueAndItsCaluculation(inputValue);
        }
        else if(input == "*" && calculateValue.length == 0){
            calculateValue[0] = inputValue;
            calculateValue[1] = input;
            this.props.setInputValueAndItsCaluculation(inputValue);

        }
        else if(input == "-" && calculateValue.length == 0){
            calculateValue[0] = inputValue;
            calculateValue[1] = input;
            this.props.setInputValueAndItsCaluculation(inputValue);

        }
        else if(input == "+" && calculateValue.length == 0){
            calculateValue[0] = inputValue;
            calculateValue[1] = input;
            this.props.setInputValueAndItsCaluculation(inputValue);
        }
        else if (input == "CALCULATE")
        {
            let calculateValueTemp = ""
            if(calculateValue.length == 3){
                if(calculateValue[1] == "/"){
                    calculateValueTemp = (parseFloat(calculateValue[0]) / parseFloat(calculateValue[2]))
                }
                else if(calculateValue[1] == "*"){
                    calculateValueTemp = (parseFloat(calculateValue[0]) * parseFloat(calculateValue[2]));

                }
                else if(calculateValue[1] == "+"){
                    calculateValueTemp = (parseFloat(calculateValue[0]) + parseFloat(calculateValue[2]));

                }
                else if(calculateValue[1] == "-"){
                    calculateValueTemp = (parseFloat(calculateValue[0]) - parseFloat(calculateValue[2]));

                }
                calculateValueTemp = calculateValueTemp.toString();
                this.props.setInputValueAndItsCaluculation(calculateValueTemp);
                calculateValue =[];

            }

        }
        else{
            if(calculateValue.length == 0){
                inputValue += input
                this.props.setInputValueAndItsCaluculation(inputValue);
            }
            else{
                if(calculateValue.length > 2){
                    inputValue = calculateValue[2];
                    inputValue += input
                    calculateValue[2] = inputValue;
                    this.props.setInputValueAndItsCaluculation(inputValue);

                }
                else{
                    inputValue = "";
                    inputValue += input
                    calculateValue[2] = inputValue;
                    this.props.setInputValueAndItsCaluculation(inputValue);

                }

            }

        }
    }

    /**
     * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
     */
    _renderInputButtons() {
        let views = [];
        for (var r = 0; r < this.props.inputArray.length; r ++) {
            let row = this.props.inputArray[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];
                inputRow.push(
                    <InputButton value={input} onPress={()=>{
                        this.onClickInputButtons(input);
                    }} key={r + "-" + i} />
                );
            }

            views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    }
}

const styles = {
    rootContainer: {
        flex: 1
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    }
}
const mapStateToProps = ({home}) => {
   const {loading,inputArray,inputValue} = home;
    return {loading,inputArray,inputValue};
};

export default connect(mapStateToProps, {getInputButtonsArray,setInputValueAndItsCaluculation})(Home);

