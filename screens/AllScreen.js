import React from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ImageBackground} from 'react-native';
import {TODOS} from '../constants/todos';
import ToDoItem from '../components/ToDoItem';

export default class CompleteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText : '',
      todoList: TODOS,
    };
  }
  onChange = (text) => {
    this.setState({
      inputText: text
    });
  }
  onSubmit = () => {
    const newTodoItem = {
      body: this.state.inputText,
      status: 'Active',
      id: this.state.todoList.length + 1
    };
    const newTodoList = [...this.state.todoList, newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: ''
    });
  }
  onPressTodoItem = (id) => {
    const todo = this.state.todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = this.state.todoList.findIndex(todo => todo.id === id);
    this.state.todoList[foundIndex] = todo;
    const newTodoList = [...this.state.todoList];
    this.setState({
      todoList: newTodoList
    },
    () => {
      setTimeout(() => {
        this.props.navigation.navigate("TodoDetail", {data: todo});
      }, 2000)
    });
  }
  onDeleteTodo = (id) => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList
    })
  }
  onLongPressTodoItem = (todo) => {
    Alert.alert(
      'Delete your todo?',
      todo.body,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  }
  render() {
    return(
      <ImageBackground source={require('../assets/images/firework.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.container1}>
            {this.state.todoList.map(item => {
              return (
                <View>
                  <ToDoItem data={item}
                    onPressButton={() => this.onPressTodoItem(item.id)}
                    onLongPressButton={() => this.onLongPressTodoItem(item)} />
                </View>
              )
            })}
            <TextInput style={styles.input} onChangeText={this.onChange} value={this.state.inputText} />
            <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
              <Text style={styles.textSubmitButton}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

CompleteScreen.navigationOptions = {
  title: 'All Todos',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    marginTop: 50,
    width: 350,
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white'
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  textSubmitButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  }
});