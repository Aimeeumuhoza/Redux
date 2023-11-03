import React, { useState ,useEffect} from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native'

export default function Update() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [line, setLine] = useState('');
  const [currentVerse,setCurrentVerse]=useState('')

  const route=useRoute();
const id = route.params.id

  useEffect(() => {
      const getVerse = async() =>{
          try {
              const res = await axios.get(`https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/verse/${id}`)
              setCurrentVerse(res.data)
          } catch (error) {
              console.log(error);
          }
      }
      getVerse()
  }, [])
const updateData = async() =>{
  try {
      await axios.put(`https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/updateVerse/${id}`,
      {title, description, line})
      navigation.navigate("Add")
  }
      
      catch (error) {
      console.log(error);
  }

}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setTitle(value)}
          style={styles.input}
          defaultValue={currentVerse.bible.title}
        />
        <TextInput
          onChangeText={(value) => setDescription(value)}
          style={styles.input}
          defaultValue={currentVerse.bible.description}
        />
        <TextInput
          onChangeText={(value) => setLine(value)}
          style={styles.input}
          defaultValue={currentVerse.bible.line}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={updateData}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
