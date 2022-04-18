import { createStackNavigator } from "@react-navigation/stack";



const Stack = createStackNavigator();

const AuthNavigator = () => (
<Stack.Navigator>
    <Stack.Screen name='Welcome' component={WelcomeScreen} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={RegisterScreen} />
    
</Stack.Navigator>

)