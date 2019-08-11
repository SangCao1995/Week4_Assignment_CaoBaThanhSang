import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function CompleteScreen(props) {
  return(
    <View style={styles.container}>
      <Text>Complete Todo Screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  title: 'Complete',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})