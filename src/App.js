import  React,{Component} from 'react';
import  {Provider} from 'react-redux';
import  {createStore,applyMiddleware} from 'redux';
import  {NetInfo,Image,View,StatusBar,BackHandler,Dimensions,Alert} from 'react-native';
import  ReduxThunk from 'redux-thunk';
import  reducers from './reducers';
import  Router from './Router';
import {Container,Content} from 'native-base';
let     store = createStore(reducers,{},applyMiddleware(ReduxThunk));
import {StyleProvider,Root } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import {Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';




class  App extends Component {
    state={isLoggedIn:null,networkStatus:true,isflashShow:false}


    componentWillMount()
      {



          BackHandler.addEventListener('hardwareBackPress', function() {
              // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
              // Typically you would use the navigator here to go to the last state.

              if (Actions.state.index === 0) {
                  Alert.alert(
                      'Exit',
                      'Are you sure, you want to exit App?',
                      [
                          {text: 'No', onPress: () => console.log('Cancel Pressed')},
                          {text: 'Yes', onPress: () => {

                              BackHandler.exitApp();

                          }},
                      ],
                      { cancelable: false }
                  )

                  return true;
              }
          });

      }


    componentDidMount() {
        SplashScreen.hide();

    }



    render()
    {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="#E62F32" barStyle="light-content" />
                {this.renderContent()}
            </View>
        )
    }


    renderContent()
    {
                return (
                    <Provider store={store}  >
                        <StyleProvider style={getTheme(material)}>
                            <Root>
                                <Router toggle={false} />
                            </Root>
                        </StyleProvider>
                    </Provider>
                )


    }
}
export default App;

