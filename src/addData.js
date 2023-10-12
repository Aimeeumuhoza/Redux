import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../Redux/action';

export default function Add() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [line, setLine] = useState('');
  const tasks = useSelector(state => state.tasks); 

  const onSubmit = () => {
    dispatch(addTask({ title, description, line }));
    setTitle("");
    setDescription("");
    setLine("");
    console.log(addTask.name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setTitle(value)}
          style={styles.input}
          placeholder="Title"
        />
        <TextInput
          onChangeText={(value) => setDescription(value)}
          style={styles.input}
          placeholder="Descriptions"
        />
        <TextInput
          onChangeText={(value) => setLine(value)}
          style={styles.input}
          placeholder="Line"
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        {/* Button to view tasks */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card} key={item._id}>
            <View>
              <Text style={styles.text}>title: {item.title} </Text>
             
              <Text style={styles.text1}>Description: {item.description} </Text>
              <Text style={styles.text1}>Line: {item.line} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,


  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
