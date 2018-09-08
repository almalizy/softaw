import React from 'react';
import { TouchableOpacity,View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

class aboutDevoloper extends React.Component {
  
    static navigationOptions = {
      title: 'عن المبرمج',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/thumbnails.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),tabBarIcon: () => (<Icon  name='thumbnails' 
      />)
    };
  
    render() {
      
      return (
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
      padding:20

    }
}
  export default aboutDevoloper;