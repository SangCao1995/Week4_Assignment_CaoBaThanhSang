import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function CompleteScreen(props) {
    const todoItem = props.navigation.getParam("data");
  return(
    <View style={styles.container}>
      <Text style={styles.textTop}>{todoItem.id}. {todoItem.status}</Text>
      <Text style={styles.textBottom}>{todoItem.body}</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  title: 'Todo Detail',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTop: {
      fontSize: 25,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textBottom: {
      fontSize: 35,
      justifyContent: 'center',
      alignItems: 'center'
  }
})