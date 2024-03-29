import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function Setup({ navigation }) {
  const [category, setCategory] = useState("tangibles");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select your category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(val, idx) => setCategory(val)}
        style={styles.picker}
      >
        <Picker.Item label="Tangibles" value="tangibles" />
        <Picker.Item label="Edibles" value="edibles" />
      </Picker>
      <Button
        title="Add Items"
        onPress={() => navigation.navigate('Items', {category})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: '100%',
    marginVertical: 32,
  },
  text: {
    fontSize: 18
  }
})