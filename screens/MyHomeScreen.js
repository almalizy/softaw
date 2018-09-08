import React from 'react';
import { TouchableOpacity, View,Image,Button,Text ,Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';

class MyHomeScreen extends React.Component {
  
    static navigationOptions = {
      
    title: ' الدورات  ',
    drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./image/chats-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
       tabBarIcon: () => (<Entypo  name='grid' 
      />),
      
      };
  
    render() {
      
      return (
<View >
       <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Entypo  size={42} color="black" style={styles.container}/>
        </TouchableOpacity>
       <View >
        <TouchableOpacity style={styles.touchable}
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Entypo name="grid" size={42} color="blue" />
        </TouchableOpacity>
        </View>

      <View  style={styles.buttonContainer}> 
          <TouchableOpacity title='test '
           onPress = {() => this.props.navigation.navigate('Electronices')} style={styles.buttons}>
          <Text style={styles.textTitle}> Electronices Basices </Text>
          <Text style={styles.text}> الأساسيات الالكترونية </Text>

            </TouchableOpacity>
            <TouchableOpacity title='test ' 
            onPress = {() => this.props.navigation.navigate('SoftWare')} style={styles.buttons}>
            <Text style={styles.textTitle}> SoftWare </Text>
            <Text style={styles.text}> السوفت وير </Text>

            </TouchableOpacity>

            <TouchableOpacity title='test ' 
            onPress = {() => Alert.alert('انتظره في التحديث القادم ان شاء الله')} style={styles.buttons}>
            <Text style={styles.textTitle}> HardWare  </Text>
            <Text style={styles.text}> الهاردوير مستوى 2 </Text>

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
  //   touchable:{
  //     minWidth: 60
  //  },
    container:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:10,
      left:50
    },
    touchable:{
      justifyContent:'flex-start',
      alignSelf:'flex-end',


    },
    buttons:{
    width: 200,
    height: 70,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#36f',
    padding: 10,
    margin:5,
    marginTop:5,
    },
    buttonContainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
  textTitle:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',
  },
  text:{
    color:'white',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',

  }
}
  export default MyHomeScreen;