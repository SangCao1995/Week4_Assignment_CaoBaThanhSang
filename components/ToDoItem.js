import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function ToDoItem(props) {
    const buttonStyle = props.data.status === 'Active' ? styles.activeButton : styles.doneButton;
    return(
        <View>
            <TouchableOpacity style={buttonStyle} onPress={props.onPressButton} onLongPress={props.onLongPressButton}>
                <Text style={styles.textItems}>{props.data.body}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textItems: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    activeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: 290,
        marginTop: 7,
        borderRadius: 10
    },
    doneButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 290,
        marginTop: 7,
        borderRadius: 10
    }
})