import axios from 'axios';
import { message } from 'antd';
import dayjs from 'dayjs';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
});

export interface ChatMessage {
  sender: string;
  time: string;
  content: string;
  type: 'text' | 'image' | 'link';
}

export const fetchChatLogs = async (date: dayjs.Dayjs, groupId: string): Promise<ChatMessage[]> => {
  try {
    const response = await api.get('/api/chat-logs', {
      params: {
        date: date.format('YYYY-MM-DD'),
        groupId,
      },
    });
    return response.data;
  } catch (error) {
    message.error('获取聊天记录失败');
    return [];
  }
};

export const generateDailySummary = async (date: dayjs.Dayjs, groupId: string): Promise<string> => {
  try {
    const response = await api.post('/api/generate-summary', {
      date: date.format('YYYY-MM-DD'),
      groupId,
    });
    return response.data.summary;
  } catch (error) {
    message.error('生成日报总结失败');
    return '';
  }
}; 