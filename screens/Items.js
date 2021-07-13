import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Items({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Enter Items for Preference Assessment</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})