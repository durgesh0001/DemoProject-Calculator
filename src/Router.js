import React from 'react';
import {BackAndroid,View} from 'react-native';
import {Scene,Router,Stack,Actions,ActionConst} from 'react-native-router-flux';
import Home from './components/Home/Home';

const RouterComponent =({toggle}) => {
    return (
            <Router   panHandlers={null} sceneStyle ={{backgroundColor: '#fbfbfe'}}>
                 <Scene  key="root">
                    <Scene key="Home" type={ActionConst.RESET}  hideNavBar ={true}  initial  >
                        <Scene key="HomeComponent"  component={Home}   title="Dashboard"    />
                    </Scene>
                 </Scene>
            </Router>
           );
};
export default RouterComponent;

