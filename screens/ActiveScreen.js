import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function ActiveScreen(props) {
  return(
    <View style={styles.container}>
      <Text>Active Screen</Text>
    </View>
  );
}

ActiveScreen.navigationOptions = {
  title: 'Active',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})