import React from 'react';
import styled from 'styled-components';
import ForecastItem from './ForecastItem';

interface Props {
  type: 'hourly' | 'weekly';
  onTypeChange: (type: 'hourly' | 'weekly') => void;
}

const Container = styled.div`
  flex: 1;
  padding: 0 20px;
  color: #FFFFFF;
`;

const SegmentedControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 8px;
`;

const Label = styled.span<{ active?: boolean }>`
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -3.33%;
  color: rgba(235, 235, 245, 0.6);
  opacity: ${props => props.active ? 1 : 0.6};
  cursor: pointer;
`;

const Indicator = styled.div<{ position: 'left' | 'right' }>`
  width: 50%;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(${props => props.position === 'right' ? '100%' : '0%'});
  transition: transform 0.3s ease;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  margin: 0 -20px;
  padding: 0 20px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ForecastList = styled.div`
  display: flex;
  gap: 12px;
  padding: 20px 0;
`;

const hourlyData = [
  { time: '12 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png', chance: '30%' },
  { time: 'Now', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
  { time: '2 AM', temp: '18°', icon: 'moon-cloud-fast-wind.png' },
  { time: '3 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
  { time: '4 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
  { time: '5 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
  { time: '6 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
  { time: '7 AM', temp: '19°', icon: 'moon-cloud-mid-rain.png' },
];

const weeklyData = [
  { time: 'MON', temp: '20°', icon: 'sun-cloud-mid-rain.png', chance: '30%' },
  { time: 'TUE', temp: '21°', icon: 'sun-cloud-mid-rain.png' },
  { time: 'WED', temp: '18°', icon: 'sun-cloud-angled-rain.png', chance: '100%' },
  { time: 'THU', temp: '20°', icon: 'sun-cloud-angled-rain.png', chance: '50%' },
  { time: 'FRI', temp: '22°', icon: 'sun-cloud-mid-rain.png' },
  { time: 'SAT', temp: '24°', icon: 'sun-cloud-angled-rain.png' },
  { time: 'SUN', temp: '23°', icon: 'sun-cloud-mid-rain.png' },
];

const WeatherForecast: React.FC<Props> = ({ type, onTypeChange }) => {
  const data = type === 'hourly' ? hourlyData : weeklyData;

  return (
    <Container>
      <SegmentedControl>
        <Labels>
          <Label
            active={type === 'hourly'}
            onClick={() => onTypeChange('hourly')}
          >
            Hourly Forecast
          </Label>
          <Label
            active={type === 'weekly'}
            onClick={() => onTypeChange('weekly')}
          >
            Weekly Forecast
          </Label>
        </Labels>
        <Indicator position={type === 'weekly' ? 'right' : 'left'} />
      </SegmentedControl>
      <ScrollContainer>
        <ForecastList>
          {data.map((item, index) => (
            <ForecastItem
              key={index}
              time={item.time}
              temp={item.temp}
              icon={item.icon}
              chance={item.chance}
              active={index === 1 && type === 'hourly'}
            />
          ))}
        </ForecastList>
      </ScrollContainer>
    </Container>
  );
};

export default WeatherForecast; 