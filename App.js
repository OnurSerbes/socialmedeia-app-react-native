import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/authscreens/LoginScreen';
import SignUpScreen from './screens/authscreens/SignUpScreen';
import HomeScreen from './screens/mainscreens/HomeScreen';
import ProfileScreen from './screens/mainscreens/ProfileScreen';
import AddPhoto from './screens/mainscreens/AddPhoto';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MainScreenOverview(){
  return(
    <BottomTabs.Navigator>
       <BottomTabs.Screen name="HomeScren"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon:()=> (<Icon name="home" size={30} color="#0357FF" />)
      }}/>
      <BottomTabs.Screen name="AddPhoto" component={AddPhoto} options={{
        title: 'Add Photo',
        headerShown: false,
        tabBarIcon:()=> (<Icon name="pluscircleo" size={30} color="#0357FF" />)
      }}/>
      <BottomTabs.Screen name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        tabBarIcon: () => (<Icon name="user" size={30} color="#0357FF" />)
      }}/>
    </BottomTabs.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LoginScreen" component={LoginScreen} options={{
            title: "Login"
          }}/>
          <Stack.Screen name = "SignupScreen" component={SignUpScreen} options={{
            title: "Sign Up"
          }}/>
          <Stack.Screen name = "MainScreenOverview" component={MainScreenOverview} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

