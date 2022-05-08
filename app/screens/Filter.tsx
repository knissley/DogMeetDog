import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Filter({ route, navigation }) {
  const { setFiltered, setAppliedFilters } = route.params;
  return (
    <View style={styles.body}>
      <View style={styles.screenContainer}>
        <View>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Apply Filters:</Text>
          <Button
            title="Small Dog"
            onPress={() => {
              setAppliedFilters((prevState) => [...prevState, {size: 'small'}]);
              setFiltered(true);
              navigation.navigate('Search');
            }}
          />
        </View>
        <Button
          onPress={() => {
            setAppliedFilters([]);
            setFiltered(false);
            navigation.navigate('Search');
          }}
          title="Clear Filters"
        />
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
    justifyContent: 'space-between',
  }
})