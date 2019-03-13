import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ComicsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Comics',
  }
  
  render() {
    return (
      <View>
        <Text> Comics View </Text>
      </View>
    );
  }
}

export default ComicsScreen;
