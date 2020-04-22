import React, {useState} from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import uuid from 'react-native-uuid';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v1(), text: 'Milk'},
    {id: uuid.v1(), text: 'Eggs'},
    {id: uuid.v1(), text: 'Juice'},
    {id: uuid.v1(), text: 'Bread'},
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems((prevItems) => {
        return [{id: uuid.v1(), text}, ...prevItems];
      });
    }
  };
  return (
    <View className={styles.mainContainer}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
