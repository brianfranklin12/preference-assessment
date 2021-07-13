import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function Setup({ navigation }) {
  const [category, setCategory] = useState();

  return (
    <View style={styles.container}>
      <Text>Select your category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(val, idx) => setCategory(val)}
        style={styles.picker}
      >
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Toys" value="toys" />
      </Picker>
      <Button
        title="Add Items"
        onPress={() => navigation.navigate('Items')}
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
  }
})