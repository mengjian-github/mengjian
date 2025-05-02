import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  padding: 44px 20px;
  color: #FFFFFF;
  text-align: center;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 40px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  font-size: 17px;
  opacity: 0.8;
`;

const Location = styled.h1`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: 1.1%;
  margin: 0 0 8px;
`;

const Temperature = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 200;
  font-size: 96px;
  line-height: 0.73;
  letter-spacing: 0.37%;
  margin: 0 0 8px;
`;

const WeatherInfo = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1.9%;
  line-height: 1.2;
  opacity: 0.8;
`;

const WeatherHeader: React.FC = () => {
  return (
    <Header>
      <StatusBar>
        <span>1:41</span>
        <div>
          <span>􀋦</span>
          <span>􀋪</span>
          <span>􀋰</span>
        </div>
      </StatusBar>
      <Location>Montreal</Location>
      <Temperature>19°</Temperature>
      <WeatherInfo>
        Mostly Clear
        <br />
        H:24° L:18°
      </WeatherInfo>
    </Header>
  );
};

export default WeatherHeader; 