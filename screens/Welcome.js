import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Preference Assessment</Text>
      <Button 
        title="Click here to get started"
        onPress={() => navigation.navigate('Setup')}
      />
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