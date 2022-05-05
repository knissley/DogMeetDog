import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Filter() {
  return (
    <View style={styles.body}>
      <View style={styles.screenContainer}>
        <Text>Filter your search here!</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FB9114',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  screenContainer: {
    marginVertical: 20,
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 5,
    height: '50%',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
  }
})