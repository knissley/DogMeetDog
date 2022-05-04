import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, Platform } from "react-native";

const Register = () => {
  const [fontLoaded] = useFonts({
    IndieFlower: require('../assets/fonts/IndieFlower.ttf'),
    InriaSans: require('../assets/fonts/InriaSans-Regular.ttf'),
    InriaSansBold: require('../assets/fonts/InriaSans-Bold.ttf'),
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
  });

  const [userName, setUserName] = useState('');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState(0);
  const [petSize, setPetSize] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petPhotoUrl, setPetPhotoUrl] = useState('');


  //tidy this up
  const verifyInfo = () => {
    let infoIsVerified = false;
    if (userName !== '' && petName !== '' && petAge !== 0 && petSize !== '' && petBreed !== '' && petGender !== '') {
      infoIsVerified = true;
    }

    return infoIsVerified;
  }


  return (
    fontLoaded
      ? (
        <>
          <View style={styles.header}/>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >
            <View style={styles.body}>
              <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
              >
                <Text style={styles.h1}>Sign Up</Text>
                <Text style={styles.pageText}>What's your name?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    selectionColor='#FB9114'
                    onChangeText={setUserName}
                    style={[styles.pageText, styles.inputField]}
                    placeholder="Enter your name"
                    autoCorrect={false}
                  />
                </View>
                <Text style={styles.pageText}>What's your dog's name?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    selectionColor='#FB9114'
                    onChangeText={setPetName}
                    style={[styles.pageText, styles.inputField]}
                    placeholder="Enter your dog's name"
                    autoCorrect={false}
                  />
                </View>
                <Text style={styles.pageText}>How old is your dog?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    selectionColor='#FB9114'
                    keyboardType='numeric'
                    onChangeText={(text) => setPetAge(Number(text))}
                    style={[styles.pageText, styles.inputField]}
                    placeholder="Enter your dog's age"
                    autoCorrect={false}
                  />
                </View>
                <Text style={styles.pageText}>What breed is your dog?</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    selectionColor='#FB9114'
                    onChangeText={setPetBreed}
                    style={[styles.pageText, styles.inputField]}
                    placeholder="Enter your dog's breed"
                    autoCorrect={false}
                  />
                </View>
                <Text style={styles.pageText}>What size and gender is your dog?</Text>
                <View style={styles.inputFlexContainer}>
                  <View style={[styles.inputContainer, styles.inputFlex]}>
                    <TextInput
                      selectionColor='#FB9114'
                      onChangeText={setPetSize}
                      style={[styles.pageText, styles.inputField]}
                      placeholder="Size"
                      autoCorrect={false}
                    />
                  </View>
                  <View style={[styles.inputContainer, styles.inputFlex]}>
                    <TextInput
                      selectionColor='#FB9114'
                      onChangeText={setPetGender}
                      style={[styles.pageText, styles.inputField]}
                      placeholder="Gender"
                      autoCorrect={false}
                    />
                  </View>
                </View>
                <View style={styles.photoContainer}>
                  <Text style={[styles.pageText, styles.photoTitle]}>Let's see your dog!</Text>
                  <TouchableOpacity
                    onPress={() => console.log('pressed pic')}
                    activeOpacity={.65}
                  >
                    <View style={styles.photoUpload}>
                      <Text style={styles.addPhoto}>+</Text>
                    </View>
                  </TouchableOpacity>
                  <Text style={[styles.pageText, styles.photoSubtitle]}>Upload a photo</Text>
                </View>
                <View style={styles.sectionBreak} />
                {
                  verifyInfo()
                    ? (
                      <>
                        <Text style={[styles.h1, {marginTop: 20}]}>Verify Your Info</Text>
                        <View style={styles.verifyInfoContainer}>
                          <Text style={[styles.pageText, styles.verifyText]}>My name is
                            <Text style={styles.decorativeInfo}>
                              {' '}
                              {userName}
                            </Text>
                          </Text>
                          <Text style={[styles.pageText, styles.verifyText]}>and my dog
                            <Text style={styles.decorativeInfo}>
                              {' '}
                              {petName}
                            </Text>
                          </Text>
                          <Text style={[styles.pageText, styles.verifyText]}>is a
                            <Text style={styles.decorativeInfo}>
                              {' '}
                              {petAge}
                              {' '}
                            </Text>
                          -year-old
                            <Text style={styles.decorativeInfo}>
                              {' '}
                              {petSize.toLowerCase()}
                            </Text>
                          ,</Text>
                          <Text style={[styles.pageText, styles.verifyText]}>
                            <Text style={styles.decorativeInfo}>
                              {petGender.toLowerCase()}
                            </Text>
                            <Text style={styles.decorativeInfo}>
                              {' '}
                              {petBreed}
                            </Text>
                          .</Text>
                          <TouchableOpacity
                            style={styles.button}
                            activeOpacity={.65}
                          >
                            <Text style={styles.buttonText}>Register</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )
                  : null
                }
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.footer} />
        </>)
      : null
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FB9114',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    height: 45,
    width: '100%',
    backgroundColor: '#fb9114'
  },
  footer: {
    height: 45,
    width: '100%',
    backgroundColor: '#fb9114'
  },
  contentContainer: {
    backgroundColor: '#fff',
    width: 360,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  pageText: {
    fontFamily: 'InriaSans',
    fontSize: 18,
  },
  photoUpload: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: '#Fb9114',
    borderStyle: "solid",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
    backgroundColor: '#fff',
  },
  photoContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhoto: {
    fontSize: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 3,
    shadowColor: '#FB9114',
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    padding: 5,
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  inputField: {
    color: '#fb9114',
  },
  h1: {
    fontFamily: 'AbrilFatfaceRegular',
    fontSize: 30,
    color: '#fb9114',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFlex: {
    width: '49%',
  },
  photoTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  photoSubtitle: {
    marginTop: 5,
    fontSize: 14,
  },
  sectionBreak: {
    marginTop: 25,
    width: '100%',
    height: 2,
    backgroundColor: '#fb9114',
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
  verifyInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
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
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'InriaSansBold',
  }
})

export default Register;