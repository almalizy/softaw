import React from 'react';
import { View,Text,Button,TouchableOpacity,TextInput,Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SoftWare from './SoftWare/SoftWare';
import Electronices from './Electronices/Electronices';
import hardware from './hardware/hardware';
import hardware2 from './hardware2';
import MyHomeScreen from '../MyHomeScreen'

class  MyHomeNav extends  React.Component {
  
  render() {
    return (
      <View>
      <Electronices/>
      <hardware/>
      <SoftWare/>
      </View>
    );
  }
}



const MyStack2Nav = 
StackNavigator({
  myHome :{screen:MyHomeScreen},
  Electronices:{screen:StackNavigator({ 
                Electronices:{screen:Electronices},
                SoftWare: {screen :StackNavigator({    
                           SoftWare:{screen:SoftWare},
                           hardware: {screen :StackNavigator({    
                                      hardware:{screen:hardware},
                                      hardware2:{screen:hardware2}   
                                          },{
                                            initialRouteName: 'myHome',
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false} 
                                              })}         
                                             },{
                                              headerMode: 'none',
                                              mode: 'modal',
                                              navigationOptions: {gesturesEnabled: false} 
                                             })}

                                             },{
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false}
                                            })}
                                             },{
                                              headerMode: 'none',
                                              mode: 'modal',
                                              navigationOptions: { gesturesEnabled: false }  
                                               })


const styles = {
  buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  buttons:{
      borderColor : 'red',
  }
  
}

export default MyStack2Nav ;

