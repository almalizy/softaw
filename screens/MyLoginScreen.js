import React from 'react';
import { TouchableOpacity, Text, View,TextInput,Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

class MyLoginScreen extends React.Component {
  
    static navigationOptions = {
      title: 'تسجيل الدخول',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/login.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    constructor(props) {
      super(props);
      this.state = { email: '',password:'' };
    }

    render() {
      
      return (
<View>

    <View style={styles.container}>
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Go to notifications">
          <Entypo name="500px" size={32} color="#ff66cc" />
          </TouchableOpacity> */}
    </View>

    <View style = {styles.textInput}>

        <TextInput 
        label="Email"
        placeholder = "username or email" 
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        style = {styles.input}/> 
        

        <TextInput 
          label="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder = "password"
          secureTextEntry
          style = {styles.input}/>  
          
        <TouchableOpacity style ={styles.buttonContainer} 
        onPress = {() =>this.props.navigation.navigate ('myHome')} >
            <Text style = {styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

    </View>

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

    },
    textInput : {
      padding :20
  },
  input : {
      height : 40,
      backgroundColor : '#f1c40f',
      marginBottom : 20,
      color : '#FFF',
      paddingHorizontal : 10
  },
  buttonContainer :{
      backgroundColor : '#c0392b',
      paddingVertical : 10
  },
  buttonText : {
      textAlign : 'center',
      color : '#ecf0f1'
  }
}
  export default MyLoginScreen;