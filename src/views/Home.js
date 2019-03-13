import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  // ---- Header Options ----- 
  static navigationOptions = {
    title: 'Marvel Comics',
  }



  render() {
    const {navigation} = this.props
    return (
        <ImageBackground
          style={styles.container}
          source = {require('../resources/bg-ppal.jpg')} 
        >
        <View style={styles.wrapper}>
          <TextInput
            style = {styles.inputText}
            editable={true}
            autoComplete='email'
            placeholder = 'email user'
            placeholderTextColor = 'white'
          />
          <TextInput
            style = {styles.inputText}
            editable={true}
            autoComplete= 'password'
            secureTextEntry={true}
            placeholder = 'password'
            placeholderTextColor = 'white'
            
          />
          <TouchableHighlight
            style={styles.buttonPpal}
            onPress = { () => navigation.navigate('Characters')}  
          >
            <Text style={styles.textButton}> Log In </Text>
          </TouchableHighlight>

          <Text 
              style={styles.textRegister}
              onPress={()=> { navigation.navigate('SignUp')}}
          > Sign Up </Text>
      
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex:10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    wrapper:{
      flex:1,
      height: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonPpal:{
      width: 250,
      height: 80,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      marginBottom:20,
    }, 
    textButton:{
      color: '#000000',
      fontSize: 18,
    },
    textRegister:{
      color: 'white', 
      textDecorationLine: 'underline'
    },
    inputText: {
      padding: 5,
      width: 250,
      height: 50,
      borderColor: 'white',
      borderWidth: 2,
      marginBottom: 30,
      color: 'white'
    }
  });

export default HomeScreen;
