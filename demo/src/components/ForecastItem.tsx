import React from 'react';
import styled from 'styled-components';

interface Props {
  time: string;
  temp: string;
  icon: string;
  chance?: string;
  active?: boolean;
}

const Container = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 8px;
  min-width: 60px;
  border-radius: 30px;
  background-color: ${props => props.active ? '#48319D' : 'rgba(72, 49, 157, 0.2)'};
  border: 1px solid ${props => props.active ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25), inset 1px 1px 0px rgba(255, 255, 255, 0.25);
`;

const Time = styled.div`
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -3.33%;
  color: #FFFFFF;
`;

const IconContainer = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

const WeatherIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Chance = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #40CBD8;
`;

const Temperature = styled.div`
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 1.9%;
  color: #FFFFFF;
`;

const ForecastItem: React.FC<Props> = ({ time, temp, icon, chance, active }) => {
  return (
    <Container active={active}>
      <Time>{time}</Time>
      <IconContainer>
        <WeatherIcon src={`/images/${icon}`} alt="weather" />
        {chance && <Chance>{chance}</Chance>}
      </IconContainer>
      <Temperature>{temp}</Temperature>
    </Container>
  );
};

export default ForecastItem; 