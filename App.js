import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

import navigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";

import storage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const user = await storage.getUser();
    if (!user) setUser(user);
    
  };




  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
