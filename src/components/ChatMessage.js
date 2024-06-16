import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message.content}</Text>
      <Text style={styles.timestamp}>{message.timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});

export default ChatMessage;
