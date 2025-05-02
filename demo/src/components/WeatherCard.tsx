import React from 'react';
import styled from 'styled-components';

interface WeatherCardProps {
  city: string;
  country: string;
  temperature: number;
  highTemp: number;
  lowTemp: number;
  condition: string;
  icon: string;
}

const Card = styled.div`
  width: 100%;
  aspect-ratio: 358/184;
  border-radius: 24px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, #5936B4 0%, #362A84 100%);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFFFFF;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LocationInfo = styled.div`
  flex: 1;
`;

const Temperature = styled.div`
  font-family: 'SF Pro Display';
  font-size: 64px;
  line-height: 0.64;
  letter-spacing: 0.37px;
`;

const Location = styled.div`
  font-family: 'SF Pro Text';
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: -0.078px;
  color: rgba(235, 235, 245, 0.6);
  margin-top: 8px;
`;

const WeatherIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-top: -40px;
  margin-right: -20px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Condition = styled.div`
  font-family: 'SF Pro Text';
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: -0.078px;
  text-align: right;
`;

const HighLow = styled.div`
  font-family: 'SF Pro Text';
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: -0.078px;
  color: rgba(235, 235, 245, 0.6);
`;

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  country,
  temperature,
  highTemp,
  lowTemp,
  condition,
  icon,
}) => {
  return (
    <Card>
      <Background />
      <Content>
        <TopSection>
          <LocationInfo>
            <Temperature>{temperature}°</Temperature>
            <Location>{city}, {country}</Location>
          </LocationInfo>
          <WeatherIcon src={`/images/weather/${icon}`} alt={condition} />
        </TopSection>
        <BottomSection>
          <HighLow>H:{highTemp}° L:{lowTemp}°</HighLow>
          <Condition>{condition}</Condition>
        </BottomSection>
      </Content>
    </Card>
  );
};

export default WeatherCard; 