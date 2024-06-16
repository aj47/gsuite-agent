import { API_URL } from './config';

export const fetchChats = async () => {
  try {
    const response = await fetch(`${API_URL}/chats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Error fetching chats');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const sendChatMessage = async (chatId, messageContent) => {
  try {
    const response = await fetch(`${API_URL}/chats/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chatId, messageContent }),
    });
    if (!response.ok) {
      throw new Error('Error sending chat message');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
