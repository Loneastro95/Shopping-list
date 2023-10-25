import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import { useState } from 'react';

const Display = (props) => {
  const [name, setName] = useState('Kabelo');
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <View>
        {props.list.map((item) => (
          <Text key={item.id} style={styles.list}>
            {item.shoppingItem}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => handleRemoveItem(item.id)}>
              ✕
            </TouchableOpacity>
          </Text>
        ))}
      </View>
      <View>
        {' '}
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />{' '}
        <Text>Done with shopping: {isSelected ? '👍' : '👎'}</Text>{' '}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    fontWeight: 600,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
    width: 220,
    height: 40,
    marginBottom: 10,
    marginLeft: 60,
  },
  btn: {
    backgroundColor: 'white',
    height: 22,
    width: 50,
    marginLeft: 10,
    borderRadius: 5,
    

  },
  checkbox: {
    display: 1,
    flexDirection: 'row',
  },
});

export default Display;
