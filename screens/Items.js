import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Items({ route, navigation }) {
  const { category } = route.params;
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(1);

  const handlePress = () => {
    if (item) {
      const newItem = {
        id,
        name: item
      }
      setList([...list, newItem])
      setItem('');
      setId(id+1);
    }
  }

  const removeItem = (item) => {
    setList(list.filter(i => i.id !== item.id))
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.form}>
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
      </View>
      <View style={styles.list}>
        {list.map(item => (
          <View 
            key={item.id}
            style={styles.inline}
          >
            <Text
              style={styles.item}
            >
              {item.name}
            </Text>
            <Ionicons.Button
              name="trash-outline" 
              size={18} 
              color="#fff"
              backgroundColor="red"
              iconStyle={{
                marginRight: 0, 
                padding: 0,
              }}
              onPress={() => removeItem(item)}
            />
          </View>
        ))}
      </View>
      <View style={styles.submit}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('trial', {list})}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  submit: {
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
    margin: 12,
    width: '60%',
    borderRadius: 5,
    borderColor: "#ccc",
  },
})  