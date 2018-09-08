import React from 'react';
import { TouchableOpacity, View,Image,Button,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

class Electronices extends React.Component {
  
  static navigationOptions = ({ navigation }) => { 
    return {
  title: 'الاساسيات الالكترونية',
  headerLeft : (<TouchableOpacity 
                  onPress={() => navigation.navigate('myHome')} 
                  >
                  <Text>للخلف </Text>
                  <Entypo  name="arrow-with-circle-left" size={32} color="white" />
                 </TouchableOpacity>)
  ,headerStyle: { backgroundColor: '#f4511e' }
  ,headerTintColor: '#fff'
  ,headerTitleStyle: { fontWeight: 'bold'}
 ,drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../image/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      /> )
    , tabBarIcon: () => (<Entypo  name='grid' />),
  }; 
};
  
    render() {
      
      return (
<View >
<View style={styles.container}>
     
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('DrawerOpen')} >
           <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </TouchableOpacity>
        </View>

      <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_1E')} style={styles.buttons}>
          <Text style={styles.textTitle}> الباب الثاني </Text>
          <Text style={styles.text}> مقدمة عن العدد والأدوات </Text>

            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_1E')} style={styles.buttons}>
            <Text style={styles.textTitle}> الباب الأول </Text>
            <Text style={styles.text}> مقدمة عن الصيانة </Text>

            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2E')} style={styles.buttons}>
            <Text style={styles.text}>   ا الباب الرابع
            العدد والادوات(b) </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2E')} style={styles.buttons}>
            <Text style={styles.text}>  الباب الثالث 
            العدد والادوات(a)    
             الملتيميتر </Text>
            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_3E')} style={styles.buttons}>
            <Text style={styles.text}> الباب السادس </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الخامس </Text>
            </TouchableOpacity>
    </View>
    <View  style={styles.buttonCOntainer}> 
          <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب الثامن </Text>
            </TouchableOpacity>
            <TouchableOpacity title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}>
            <Text style={styles.text}> الباب التاسع </Text>
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
    touchable:{
      minWidth: 60
   },
    container:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:20

    },
    buttons:{
    width: 150,
    height: 100,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#36f',
    padding: 10,
    margin:5,
    marginTop:5,
    },
    buttonCOntainer:{
      justifyContent:'center' ,
      alignItems: 'center',
      margin:30 ,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  textTitle:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',
  },
  text:{
    color:'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent:'center' ,
      alignItems: 'center',

  }
}
  export default Electronices;