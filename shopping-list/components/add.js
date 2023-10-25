import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

const Add = (props) => {
  const [text, setText] = useState('');

  const addToShoppingList = () => {
    props.add(text);
  };

  const onChangehandleChange = (textValue) => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter add..."
        onChangeText={onChangehandleChange}
      />

      <TouchableOpacity style={styles.btn} onPress={addToShoppingList}>
        Add 
      </TouchableOpacity>
      

    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 80,
    width: 150,
    height: 40,
    padding: 9,
    color: 'white',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'whitesmoke',
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 15,
    width: 300,
    height: 40,
    padding: 9,
    color: 'black',
  },
});

export default Add;
