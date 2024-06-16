import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { sendMessage, fetchMessages } from '../api/chats';
import ChatMessage from '../components/ChatMessage';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages);
    };
    loadMessages();
  }, []);

  const handleSend = async () => {
    if (message.trim()) {
      await sendMessage(message);
      setMessage('');
      // Ideally, fetch new messages or append the new message optimistically
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 10 }}
        onChangeText={text => setMessage(text)}
        value={message}
        placeholder="Type your message here..."
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default ChatScreen;
