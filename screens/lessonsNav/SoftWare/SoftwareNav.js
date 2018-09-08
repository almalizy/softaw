import React from 'react';
import { View,Text,Button,TouchableOpacity,TextInput,Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import SoftWare from './SoftWare'

const {text,short} = details ;

class _1S extends React.Component {
  //  next line only for navigation title ...

  static navigationOptions = {
    title: '_1E',
    headerTitle:'مقدمة عن السوفت وير ',
    headerBackTitle: '_1',  
  };

    
    
    render (){
        return (
<View>  
   

    <View style={{flexDirection: 'row',justifyContent:'center' }} > 

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_3QS')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_3S')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2QS')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_2S')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
             <Entypo  name="help" size={32} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('_1QS')} style={styles.buttons}>
             <Entypo  name="arrow-bold-left" size={32} color="black" />
        </TouchableOpacity>

    </View>

    <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
       <Text  style={{color:'blue',fontWeight:'bold',fontSize: 20 }}>الدرس الاول مقدمة عن السوفت وير </Text>
    </View>

    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
               {text} 
              </Text>


             <Text style={{ fontSize: 18 ,alignSelf:'flex-end',fontWeight:'bold',backgroundColor:'yellow'}} >
                     الخلاصة :
             </Text>  

            <Text style={{ fontSize: 18 ,alignSelf:'flex-end',backgroundColor:'yellow'}} >
           {short}
            </Text>
          
       </View>

          <Button 
              title='الاستمرار' 
              style={styles.buttons}
              onPress = {() => this.props.navigation.navigate('_1Q')}
              />
              
    </View>

    

    
</View>

        );
    }
}


// السؤال الاول.......

class _1QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 1',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



// الصفحة الثانية  .........

class _2S extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
    headerTintColor: 'green'
  };
  render() {
    return (
      <View>
        <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
        <Button
          onPress={() => this.props.navigation.navigate('_4E')}
          title="go to screen 4"
        />
      </View>
    );
  }
}


class _2QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 2',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



class _3S extends React.Component {
  static navigationOptions = {
    title: 'screen 3',
    headerTintColor: 'green'
  };
  render() {
    return (
      <View>
        <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
        <Button
          onPress={() => this.props.navigation.navigate('_4E')}
          title="go to screen 4"
        />
      </View>
    );
  }
}

class _3QS extends React.Component {
  static navigationOptions = {
    title: 'سؤال 3',
    headerBackTitle:null,
    headerTintColor: 'red'
    
  };

  constructor(props) {
    super(props);
    this.state = { text1: '',text2: '' };
  }

conditional=()=>{
     this.state.text1 == 'ايون'&& this.state.text2 == 'بوليمر'
     ? this.props.navigation.navigate('_2')
     : Alert.alert("هناك خطأ\n ارجع الي الدرس السابق ثم أعد المحاولة من فضلك")
}
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
                 السؤال     
                      </Text>


          <TextInput
                  style={{height: 40,width:60,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text1) => this.setState({text1})}
                  value={this.state.text1}
                  autoCorrect={false}
                  maxLength={4}    
            /> 
       
    <View > 
           <View style={{right:10}}>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end',}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}}  >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
           

            
              <Text style={{ fontSize: 18 ,alignSelf:'center'}} >
              </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
               </Text>
              <Text style={{ fontSize: 18 ,alignSelf:'flex-end'}} >
              </Text>
          </View>
          <TextInput
                  style={{height: 40,width:70,
                fontSize: 22 ,alignSelf:'flex-end',marginRight:10}}
                  placeholder='_____'
                  onChangeText={(text2) => this.setState({text2})}
                  value={this.state.text2}
                  autoCorrect={false}
                  maxLength={6}    
            /> 
     </View>
                <Button 
              title='check' 
              style={styles.buttons}
              onPress = {this.conditional}
              />
      </View>

      
    );
  }
}



const MyStackNav = 
StackNavigator({
  SoftWare:{screen:SoftWare},
  _1S: {screen :StackNavigator({    
               _1S:{screen:_1S},
               _1QS: {screen :StackNavigator({    
                            _1QS:{screen:_1QS},
                            _2S:{screen:StackNavigator({
                                       _2S:{screen:_2S},
                                       _2QS:{screen:StackNavigator({
                                                   _2QS:{screen:_2QS},
                                                   _3S:{screen:StackNavigator({
                                                              _3S:{screen:_3S},
                                                              _3QS:{screen:_3QS}
                                                   },{
                                                    headerMode: 'none',
                                                    mode: 'modal',
                                                    navigationOptions: {gesturesEnabled: false,}
                                                    })}
                                       },{
                                        headerMode: 'none',
                                        mode: 'modal',
                                        navigationOptions: {gesturesEnabled: false,}
                                        })},
                                                     },{
                                                      headerMode: 'none',
                                                      mode: 'modal',
                                                      navigationOptions: {gesturesEnabled: false,}
                                                      })}
                                          },{
                                            headerMode: 'none',
                                            mode: 'modal',
                                            navigationOptions: {gesturesEnabled: false,}
                                            })}         
                              },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false}
                               },{
                                headerMode: 'none',
                                mode: 'modal',
                                navigationOptions: {gesturesEnabled: false,}
                                })}  });


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

export default MyStackNav ;

 {/* <View  style={styles.buttonCOntainer}> 
            
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
            <Button title='test ' onPress = {() => this.props.navigation.navigate('_2')} style={styles.buttons}/>
    </View> */}