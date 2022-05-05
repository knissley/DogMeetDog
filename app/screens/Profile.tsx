import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { LOCAL_IP } from '../../config';
import { UserInfoContext } from '../context/userInfoContext';
import { useFonts } from 'expo-font';
import axios from 'axios';
import { Footer } from '../components/Footer';
import { signOut, auth } from '../../firebase';

const Profile = ({ navigation }) => {
  const { userInfo }= useContext(UserInfoContext);
  const [fontLoaded] = useFonts({
    IndieFlower: require('../assets/fonts/IndieFlower.ttf'),
    InriaSans: require('../assets/fonts/InriaSans-Regular.ttf'),
    InriaSansBold: require('../assets/fonts/InriaSans-Bold.ttf'),
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
  });

  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    axios.get(`http://${LOCAL_IP}:3500/profiles/${userInfo.id}`)
      .then((res) => setProfileDetails(res.data))
      .catch((err) => console.log('error fetching profile: ', err));
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then((res) => {
        console.log('Signed out!');
        navigation.navigate('Welcome');
      })
      .catch((err) => console.log('Error signing out user: ', err));
  };

  return (
    fontLoaded
    ? (
      <>
        <View style={styles.body}>
          <View style={styles.screenContainer}>
            <View style={styles.photoContainer}>
              <Image
                source={require('../assets/images/remy.jpg')}
                style={styles.petPhoto}
              />
            </View>
            <View style={styles.profileBody}>
            <View style={styles.verifyInfoContainer}>
              <Text style={[styles.pageText, styles.verifyText]}>My name is
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.userName}
                </Text>
              </Text>
              <Text style={[styles.pageText, styles.verifyText]}>and my dog
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.name}
                </Text>
              </Text>
              <Text style={[styles.pageText, styles.verifyText]}>is a
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.age}
                  {' '}
                </Text>
              -year-old
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.size}
                </Text>
              ,</Text>
              <Text style={[styles.pageText, styles.verifyText]}>
                <Text style={styles.decorativeInfo}>
                  {'PLACEHOLDER'.toLowerCase()}
                </Text>
                ,
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.breed}
                </Text>
              </Text>
              <Text style={[styles.pageText, styles.verifyText]}>who loves
                <Text style={styles.decorativeInfo}>
                  {' '}
                  {profileDetails.activity}
                </Text>
              !</Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={.65}
              onPress={handleSignout}
              style={styles.signoutButton}
            >
              <Text style={styles.signoutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer activePage={'Profile'} />
      </>
    )
    : null
  )
};

export default Profile;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FB9114',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 2.5,
    marginTop: 20,
    marginBottom: 50,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
    width: 350,
    alignItems: 'center',
  },
  pageText: {
    fontFamily: 'InriaSans',
    fontSize: 18,
  },
  decorativeInfo: {
    fontFamily: 'IndieFlower',
    color: '#FB9114',
    fontSize: 32,
  },
  verifyText: {
    fontSize: 22,
    marginBottom: -15,
  },
  petPhoto:{
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  photoContainer: {
    borderColor: '#FB9114',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  verifyInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  signoutButton: {
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .25,
    fontFamily: 'InriaSansBold',
    padding: 5,
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: '#FB9114',
    height: 40,
  },
  signoutText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'InriaSansBold',
  }
});