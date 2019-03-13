import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LateralMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text> Menu lateral </Text>
      </View>
    );
  }
}

export default LateralMenu;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})