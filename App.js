import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
// Components 
import HomeScreen from './src/views/Home';
import CharactersScreen from './src/views/Characters';
import EventsScreen from './src/views/Events';
import ComicsScreen from './src/views/Comics';
import LateralMenu from './src/views/LateralMenu';
import ProfileScreen from './src/views/Profile';
import FavoritesScreen from './src/views/Favorites';
import SignUpScreen from './src/views/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}



const AppStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen}, 
  Characters: {screen: CharactersScreen},
  Events : {screen: EventsScreen},
  Comics: { screen: ComicsScreen },
  SignUp: { screen: SignUpScreen }
},)




//Export container 
const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

