import { Text, SafeAreaView, StyleSheet, FlatList, CheckBox } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Add from './components/add';
import Display from './components/display';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, shoppingItem: 'Milk' },
    {
      id: 2,
      shoppingItem: 'BREAD',
    },
  ]);

  const addShoppingItem = (text) => {
    setItems((prevItems) => {
      return [{ id: 3, shoppingItem: text }, ...prevItems];
    });
  };
  const handleDeleteClick = (itemId) => {
    const newitems = [...items];

    const index = items.findIndex((item) => item.id === itemId);

    newitems.splice(index, 1);

    setItems(newitems);
  };

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}> Shopping list </Text>
      <Add add={addShoppingItem}   />
      <Display list={items} delete={handleDeleteClick} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#fff',
    padding: 8,
  },
  text: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 40,
    
    marginBottom: 50,

    
  }
});
