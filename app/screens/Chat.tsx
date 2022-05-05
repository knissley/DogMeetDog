import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '../context/userInfoContext';
import axios from 'axios';
import { LOCAL_IP } from '../../config';


const Item = ({ item, backgroundColor }) => (
  <View style={backgroundColor}>
    <Text style={styles.messageText}>{item.message}</Text>
  </View>
);



const Chat = ({ route }) => {
  const { userInfo } = useContext(UserInfoContext);
  const { chatId } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`http://${LOCAL_IP}:3500/messages/${chatId}`)
      .then((res) => setMessages(res.data))
      .catch((err) => console.log('Error fetching chat messages: ', err));
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = item.sender === userInfo.name ? '#FB9114' : 'pink';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
      />
    )
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.messageId}
      />
    </View>
  )
};

export default Chat;

const styles = StyleSheet.create({
  messageText: {
    color: 'red',
  }
});