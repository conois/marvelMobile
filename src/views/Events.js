import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Events',
  }

  render() {
    return (
      <View>
        <Text> Events View </Text>
      </View>
    );
  }
}

export default EventsScreen;
