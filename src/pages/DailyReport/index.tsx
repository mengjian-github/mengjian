import React, { useState } from 'react';
import { Layout, Typography, Card, DatePicker } from 'antd';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const { Content } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  margin-top: 24px;
`;

interface ChatMessage {
  sender: string;
  time: string;
  content: string;
}

const DailyReport: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
      // TODO: 这里添加获取聊天记录的逻辑
    }
  };

  return (
    <StyledLayout>
      <StyledContent>
        <Title level={2}>微信群聊日报</Title>
        <DatePicker 
          value={selectedDate}
          onChange={handleDateChange}
          style={{ marginBottom: 16 }}
        />
        <StyledCard title="聊天记录总结">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div key={index}>
                <p>{message.sender} - {message.time}</p>
                <p>{message.content}</p>
              </div>
            ))
          ) : (
            <p>暂无聊天记录</p>
          )}
        </StyledCard>
      </StyledContent>
    </StyledLayout>
  );
};

export default DailyReport; 