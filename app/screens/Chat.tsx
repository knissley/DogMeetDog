import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '../context/userInfoContext';
import axios from 'axios';
import { LOCAL_IP } from '../../config';
import { SafeAreaView } from 'react-native-safe-area-context';


const Item = ({ item, backgroundColor, textAlign }) => (
  <View style={[styles.messageContainer, backgroundColor]}>
    <View style={styles.innerMessageContainer}>
      <Text style={[styles.messageText, textAlign]}>{item.message}</Text>
    </View>
  </View>
);



const Chat = ({ route }) => {
  const { userInfo } = useContext(UserInfoContext);
  const { chatId, userName:recipientName } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`http://${LOCAL_IP}:3500/messages/${chatId}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.log('Error fetching chat messages: ', err));
  }, []);

  const renderItem = ({ item }) => {
    const textAlign = item.sender === userInfo.name ? 'right' : 'left';
    const backgroundColor = '#fff';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textAlign={{ textAlign }}
      />
    )
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.screenContainer}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.messageId}
          contentContainerStyle={styles.messageList}
        />
        <View style={styles.sendMessageContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={`Send message to ${recipientName}`}
              selectionColor='#FB9114'
            />
          </View>
          <Text>Submit</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default Chat;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FB9114',
    flex: 1,
  },
  messageText: {
    color: 'black',
    fontSize: 20,
  },
  screenContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 50,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 1, height: 1},
    alignItems: 'center',
  },
  messageContainer: {
    width: 280,
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 2, height: 1},
    borderColor: '#FB9114',
    borderWidth: 3,
    borderStyle: 'solid',
  },
  messageList: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sendMessageContainer: {
    backgroundColor: '#FB9114',
    width: '100%',
    padding: 5,
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
  }
});