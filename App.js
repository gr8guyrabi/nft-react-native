import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { SafeAreaView, useColorScheme } from 'react-native'

import { useFonts } from 'expo-font'

import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator()


const App = () => {
    const [loaded] = useFonts({
        InterBold: require("./assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./assets/fonts/Inter-Light.ttf"),
    })

    if(!loaded) return null

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppNavigation/>
        </SafeAreaView>
    )
    
}

const AppNavigation = () => {
    const scheme = useColorScheme()
    const UserTheme = scheme === 'dark' ? DarkTheme : DefaultTheme
    const theme = {
        ...UserTheme,
        colors: {
            ...UserTheme.colors,
            // background: "transparent",
        }
    }

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App