import MyHomeScreen from './screens/MyHomeScreen';
import MyLoginScreen from './screens/MyLoginScreen';
import contactUs from './screens/contactUs';
import otherApps from './screens/otherApps';
import aboutDevoloper from './screens/aboutDevoloper';

import MyNotificationsScreen from './screens/MyNotificationsScreen';
import MyHomeNav from './screens/lessonsNav/MyHomeNav';
import SoftwareNav from './screens/lessonsNav/SoftWare/SoftwareNav';
import hardwareNave from './screens/lessonsNav/hardware/hardwareNave';
import ElectronicNav from './screens/lessonsNav/Electronices/ElectronicNav';

import MainScreen from './MainScreen';
import { TabNavigator,DrawerNavigator ,StackNavigator} from 'react-navigation';
import {Platform,}from 'react-native';

const MainNavigator = DrawerNavigator({
     Main: { screen: MainScreen },
     myLogin : {screen: MyLoginScreen },

     myHome : {screen: MyHomeScreen },

     Electronic:{screen:ElectronicNav},
     soft:{screen:SoftwareNav},
     hardware:{screen:hardwareNave},
     
      second: {screen: contactUs }
     ,third:{screen : aboutDevoloper},
     fourth:{screen:TabNavigator ({
        fourth : {screen: MyLoginScreen },
        myHome:{screen:MyHomeScreen},
       second: {screen: contactUs }
        ,fourth:{screen:otherApps},
        MyNotifications:{screen:MyNotificationsScreen}
},

       { tabBarPosition: 'bottom',
        tabBarOptions: {activeTintColor: 'red',showIcon:'true',tabStyle:{padding:5}
       ,labelStyle: {marginTop :Platform.OS === 'android' ? 5 : 0 ,padding:5,fontSize: 14,}
       ,style: { backgroundColor: '#99d6ff',padding:5},
       }})},
        })


       
    

export default MainNavigator;