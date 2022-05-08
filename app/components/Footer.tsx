import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import * as RootNavigation from '../routes/RootNavigation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IOIcon from 'react-native-vector-icons/Ionicons';
import { UserInfoContext } from '../context/userInfoContext';

export const Footer = ({ activePage }) => {
  const { userInfo } = useContext(UserInfoContext);
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
        onPress={() => footerNavigate('Profile', { userId: userInfo.id })}
      >
        <IOIcon name="person" size={30} color={
          activePage === 'Profile' ? '#FB9114' : 'black'
        } />
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
        <AntIcon name="message1" size={30} color={
          activePage === 'Messages' ? '#FB9114' : 'black'
        } />
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
    paddingHorizontal: 50,
    paddingBottom: 10,
  },
})