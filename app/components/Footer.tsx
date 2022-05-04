import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as RootNavigation from '../routes/RootNavigation';

export const Footer = ({ activePage }) => {
  const footerNavigate = (screen, params = {}) => {
    RootNavigation.navigate(screen, params);
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => footerNavigate('Profile')}
      >
        <Text
          style={{ color: activePage === 'Profile' ? '#FB9114' : 'black'}}
        >Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => footerNavigate('Search')}
      >
        <Text
          style={{ color: activePage === 'Search' ? '#FB9114' : 'black'}}
        >Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => footerNavigate('Messages')}
      >
        <Text
          style={{ color: activePage === 'Messages' ? '#FB9114' : 'black'}}
        >Messages</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    height: 90,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
})