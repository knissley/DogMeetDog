import axios from "axios";
import { useFonts } from "expo-font";
import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { LOCAL_IP } from "../../config";
import { Footer } from "../components/Footer";
import { UserInfoContext } from "../context/userInfoContext";

const Item = ({ item, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.petRowContainer}
    activeOpacity={.65}
  >
    <View style={styles.petRowContentsContainer}>
      <View style={styles.petImageContainer}>
        <Image
          style={styles.petPhoto}
          source={{ uri: `https://tinyurl.com/dogmeet${item.photo.split('.')[0]}`}}
        />
      </View>
      <View style={styles.petNamesContainer}>
        <Text style={[styles.pageText, styles.ownerName]}>{item.ownerName}'s</Text>
        <Text style={[styles.pageText, styles.petName]}>{item.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


const Search = ({ navigation }) => {
  const [fontLoaded] = useFonts({
    IndieFlower: require('../assets/fonts/IndieFlower.ttf'),
    InriaSans: require('../assets/fonts/InriaSans-Regular.ttf'),
    InriaSansBold: require('../assets/fonts/InriaSans-Bold.ttf'),
    AbrilFatfaceRegular: require('../assets/fonts/AbrilFatface-Regular.ttf'),
  });

  const { userInfo } = useContext(UserInfoContext);

  const handlePetClick = () => {
    console.log('clicked pet row');
  }


  const [pets, setPets] = useState([]);


  const renderItem = ({ item }) => {
    return (
      <Item
      item={item}
      onPress={handlePetClick}
      />
      )
    }

  useEffect(() => {
    axios.get(`http://${LOCAL_IP}:3500/pets`)
      .then((res) => {
        const petList = res.data.filter((pet) => pet.ownerName !== userInfo.name);
        setPets(petList);
      })
      .catch((err) => console.log('error fetching pets: ', err));
  }, []);

  return (
    fontLoaded ? (
    <>
      <View style={styles.body}>
        <View style={styles.searchContainer}>
          <View style={styles.searchTitleContainer}>
            <Text style={[styles.pageText, {fontSize: 22}]}>Dogs near you</Text>
            <TouchableOpacity
              activeOpacity={.65}
              onPress={() => navigation.navigate('Filter')}
            >
              <Text>Filter</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={pets}
            renderItem={renderItem}
            keyExtractor={(item) => item.userId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <Footer activePage={'Search'} />
    </>
    )
    : null
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FB9114',
    alignContent: 'center',
  },
  searchContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    marginHorizontal: 2.5,
    marginTop: 20,
    marginBottom: 50,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
  },
  pageText: {
    fontFamily: 'InriaSans',
    fontSize: 18,
  },
  petRowContainer: {
    width: 360,
    borderColor: '#FB9114',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  petRowContentsContainer: {
    flexDirection: 'row',
  },
  petImageContainer: {
    borderRadius: 100,
    height: 80,
    width: 80,
    borderColor: '#Fb9114',
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
    backgroundColor: '#fff',
  },
  ownerName: {
    fontSize: 16,
    color: '#FB9114',
  },
  petName: {
    fontSize: 22,
    marginTop: -5,
  },
  petNamesContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  petPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  searchTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#FB9114',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
})

export default Search;