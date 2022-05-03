import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useFonts } from "expo-font";
import { auth, loginUser } from "../../firebase";
import { UserInfoContext } from "../context/userInfoContext";
import axios from "axios";


const WelcomeScreen = () => {
  const [fontLoaded] = useFonts({
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
    IndieFlower: require('../assets/fonts/IndieFlower.ttf'),
    InriaSans: require('../assets/fonts/InriaSans-Regular.ttf'),
    InriaSansBold: require('../assets/fonts/InriaSans-Bold.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const { setUserInfo } = useContext(UserInfoContext);


  const handleLogin = () => {
    loginUser(auth, email, password)
      .then(() => {
        setLoginErrorMsg('');
        axios.get(`http://localhost:3500/users/${email}`)
          .then((res) => {
            const id = res.data.id;
            const name = res.data.name;
            setUserInfo((prevState) => {
              prevState = { ...prevState, email, id, name }
            })
          })
          .catch((err) => console.log('Error retrieving user info: ', err));
        //navigate to another page
      })
      .catch(err => setLoginErrorMsg(getMessageFromErrorCode(err)));
  }

  const getMessageFromErrorCode = (err: string) => {
    let errorCode = err.toString().split('/')[1];
    errorCode = errorCode.split(')')[0];
    console.log(errorCode);

    switch (errorCode) {
      case "invalid-email":
        return "Invalid email, please try again."
      case "user-not-found":
        return "That email was not found, please try again."
      case "wrong-password":
        return "Incorrect password, please try again."
      default:
        return "There was an error logging in, please try again."
    }
  }

  return (
    fontLoaded
      ? (<>
        <View style={[styles.header, { opacity: .85 }]} />
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>
          <ImageBackground
            style={styles.background}
            source={require('../assets/images/welcome-bg.jpg')}>
            <View style={styles.welcomeScreenContainer}>
              <View style={styles.logoContainer}>
                <Text style={styles.logo}>DogMeetDog</Text>
                <Text style={styles.subhead}>Get your dog a date!</Text>
              </View>
              <View style={styles.inputsContainer}>
                <Text style={styles.label}>Email</Text>
                <View style={[styles.inputContainer, { marginBottom: 10 }]}>
                  <TextInput
                    selectionColor='#FB9114'
                    onChangeText={setEmail}
                  ></TextInput>
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    selectionColor='#FB9114'
                    secureTextEntry
                    onChangeText={setPassword}
                  ></TextInput>
                </View>
                <Text style={styles.errorMsg}>{loginErrorMsg}</Text>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={.65}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonText}>
                    Login
                  </Text>
                </TouchableOpacity>
                <Text style={styles.signUpLabel}>Don't have an account?</Text>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={.65}
                >
                  <Text style={styles.buttonText}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </>)
      : null
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 45,
    position: "absolute",
    zIndex: 20,
    top: 0,
    width: '100%',
    backgroundColor: '#FB9114',
  },
  welcomeScreenContainer: {
    flex: 1,
    justifyContent: "center",
    width: 215,
  },
  logo: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: 'AbrilFatfaceRegular',
    color: '#FB9114',
  },
  subhead: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'IndieFlower',
    color: '#FB9114',
  },
  label: {
    fontFamily: 'InriaSans',
    color: '#FB9114',
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 3,
    shadowColor: '#FB9114',
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    padding: 5,
    paddingLeft: 5,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: .25,
    fontFamily: 'InriaSansBold',
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#FB9114',
  },
  buttonText: {
    fontFamily: 'InriaSansBold',
    fontSize: 16,
    color: '#fff',
    textAlign: "center",
  },
  logoContainer: {
    marginBottom: 50,
  },
  inputsContainer: {
    marginBottom: 60,
    width: '100%',
    paddingLeft: 7.5,
    paddingRight: 7.5,
  },
  buttonsContainer: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  errorMsg: {
    color: '#FB9114',
    position: "absolute",
    bottom: -35,
    left: 12,
    fontSize: 12,
  },
  signUpLabel: {
    color: '#FB9114',
    fontSize: 12,
  }
});

export default WelcomeScreen;