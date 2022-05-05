import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as RootNavigation from '../routes/RootNavigation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export const Footer = ({ activePage }) => {
  const footerNavigate = (screen, params = {}) => {
    if (screen === activePage) {
      RootNavigation.navigate(screen, params);
    } else {
      RootNavigation.replace(screen, params);
    }
  };

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
        <AntIcon name="search1" size={30} color={
          activePage === 'Search' ? '#FB9114' : 'black'
        } />
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