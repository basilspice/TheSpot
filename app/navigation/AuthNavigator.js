import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'

import LoginScreen from "../screens/LoginScreen";
import PostsScreen from "../screens/PostsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";


const Stack = createStackNavigator();

const AuthNavigator = () => (
<Stack.Navigator>
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}} />
    <Stack.Screen name='Skip Login' component={PostsScreen} options={{headerShown: false}}/>
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={RegisterScreen} />
    
</Stack.Navigator>

)

export default AuthNavigator;