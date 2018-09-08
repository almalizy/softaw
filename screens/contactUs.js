import React,{ Component } from 'react';
import { TextInput,TouchableOpacity, Text, View,Button,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 class contactUs extends Component {
  static navigationOptions = {
    title: 'تواصل معنا',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./image/cart.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),tabBarIcon: () => (<Icon  name='ios-basket' 
    />)
  };

render(){
  return(
  <View style={styles.container}>

    <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title="Go to notifications">
            <Image
            source={require('./image/list.png')}
            style={styles.icon}
            />
      </TouchableOpacity>
</View>

      );
    }
  } 


  const styles = {
        icon:{
          width: 24,
          height: 24,
        },
        container:{
          flex:1,
          alignItems:'flex-end',
          justifyContent:'flex-start',
          paddingTop:60,
          padding:20}}
   
  export default contactUs ;