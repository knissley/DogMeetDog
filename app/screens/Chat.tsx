import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '../context/userInfoContext';
import axios from 'axios';
import { LOCAL_IP } from '../../config';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


const Item = ({ item, textAlign }) => (
  <View style={styles.messageContainer}>
    <Text style={[styles.messageText, textAlign]}>{item.message}</Text>
  </View>
);


const Chat = ({ route }) => {
  const { userInfo } = useContext(UserInfoContext);
  const { chatId, userName:recipientName } = route.params;

  const [messages, setMessages] = useState([]);

  const [messageText, setMessageText] = useState('');

  const handleSendMessage = () => {
    let timestamp = new Date().toISOString().split('T')[0];
    const messageDetails = {
      chatId,
      sender: userInfo.name,
      message: messageText,
      timestamp,
    };

    axios.post(`http://${LOCAL_IP}:3500/messages`, messageDetails)
      .then(() => axios.get(`http://${LOCAL_IP}:3500/messages/${chatId}`))
        .then((res) => setMessages(res.data))
          .catch((err) => console.log('error getting messages after post: ', err));
  }

  useEffect(() => {
    axios.get(`http://${LOCAL_IP}:3500/messages/${chatId}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.log('Error fetching chat messages: ', err));
  }, []);

  const renderItem = ({ item }) => {
    const textAlign = item.sender === userInfo.name ? 'right' : 'left';

    return (
      <Item
        item={item}
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
              onChangeText={setMessageText}
            />
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            activeOpacity={.55}
            onPress={handleSendMessage}
          >
            <Icon name="send" size={25} color="#fff" />
          </TouchableOpacity>
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
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .25,
    shadowOffset: { width: 2, height: 1},
    borderColor: '#FB9114',
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: '#fff',
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
    justifyContent: 'space-evenly'
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});