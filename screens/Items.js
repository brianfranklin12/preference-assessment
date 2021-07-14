import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Items({ route, navigation }) {
  const { category } = route.params;
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handlePress = () => {
    if (item) {
      setList([...list, item])
      setItem('');
    }
  }

  const removeItem = (item) => {
    setList(list.filter(i => i !== item))
  }

  return (
    <View style={styles.container}>
      <Text>Enter Items for Preference Assessment: {category[0].toUpperCase() + category.slice(1)} </Text>
      <View style={styles.inline}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter item"
          value={item}
          onChangeText={setItem}
        />
        <Button
          title="+" 
          onPress={handlePress}
        />
      </View>
      {list.map(item => (
        <View 
          key={item}
          style={styles.inline}
        >
          <Text
            style={styles.item}
          >
            {item}
          </Text>
          <Ionicons.Button
            name="trash-outline" 
            size={18} 
            color="#fff"
            backgroundColor="red"
            iconStyle={{marginRight: 0, padding: 0}}
            onPress={() => removeItem(item)}
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 12,
    padding: 12,
    width: '60%',
    borderRadius: 5,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0
  },
  item: {
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textAlign: 'center',
    margin: 8,
    width: '60%',
    borderRadius: 5,
    borderColor: "#888",
  },
})