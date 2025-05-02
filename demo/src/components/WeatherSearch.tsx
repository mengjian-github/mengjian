import React from 'react';
import styled from 'styled-components';
import WeatherCard from './WeatherCard';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #2E335A 0%, #1C1B33 100%);
  overflow: hidden;
`;

const Ellipse = styled.div<{ delay: number }>`
  position: absolute;
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background: conic-gradient(from 180deg at 50% 50%, #612FAB00 13.89%, #612FAB 35.99%, #612FAB00 62.79%, #612FAB 74.8%);
  filter: blur(200px);
  animation: rotate 10s linear infinite;
  animation-delay: ${props => props.delay}s;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const TopEllipse = styled(Ellipse)`
  top: -112px;
  left: -112px;
`;

const BottomEllipse = styled(Ellipse)`
  bottom: -112px;
  right: -112px;
`;

const TopNavigation = styled.div`
  backdrop-filter: blur(20px);
  padding: 44px 0 10px;
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  color: #FFFFFF;
  font-family: 'SF Pro Text';
  margin-bottom: 2px;
`;

const Time = styled.div`
  font-weight: 600;
  font-size: 17px;
  letter-spacing: -0.408px;
`;

const StatusIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 16px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'SF Pro Display';
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: rgba(235, 235, 245, 0.6);
  font-size: 23px;
  padding: 0;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.364px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 28px;
  padding: 0;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  margin: 0 16px;
  background: linear-gradient(135deg, rgba(46, 51, 90, 0.26) 0%, rgba(28, 27, 51, 0.26) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 7px 8px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: rgba(235, 235, 245, 0.6);
  font-family: 'SF Pro Text';
  font-size: 17px;
  width: 100%;
  letter-spacing: -0.408px;
  
  &::placeholder {
    color: rgba(235, 235, 245, 0.6);
  }
  
  &:focus {
    outline: none;
  }
`;

const CardsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 154px);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const WeatherSearch: React.FC = () => {
  const weatherData = [
    {
      city: 'Montreal',
      country: 'Canada',
      temperature: 19,
      highTemp: 24,
      lowTemp: 18,
      condition: 'Mid Rain',
      icon: 'moon-cloud-mid-rain.svg'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      temperature: 20,
      highTemp: 21,
      lowTemp: -19,
      condition: 'Fast Wind',
      icon: 'moon-cloud-fast-wind.svg'
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      temperature: 13,
      highTemp: 16,
      lowTemp: 8,
      condition: 'Showers',
      icon: 'sun-cloud-angled-rain.svg'
    },
    {
      city: 'Tennessee',
      country: 'United States',
      temperature: 23,
      highTemp: 26,
      lowTemp: 16,
      condition: 'Tornado',
      icon: 'tornado.svg'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      temperature: 31,
      highTemp: 36,
      lowTemp: 26,
      condition: 'Partly Cloudy',
      icon: 'sun-cloud-mid-rain.svg'
    }
  ];

  return (
    <Container>
      <TopEllipse delay={0} />
      <BottomEllipse delay={5} />
      <TopNavigation>
        <StatusBar>
          <Time>1:41</Time>
          <StatusIcons>
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </StatusIcons>
        </StatusBar>
        <NavigationContent>
          <LeftSection>
            <BackButton>􀆉</BackButton>
            <Title>Weather</Title>
          </LeftSection>
          <MenuButton>􀍡</MenuButton>
        </NavigationContent>
        <SearchContainer>
          <SearchIcon src="/images/weather/magnifyingglass.svg" alt="Search" />
          <SearchInput placeholder="Search for a city or airport" />
        </SearchContainer>
      </TopNavigation>
      <CardsContainer>
        {weatherData.map((data, index) => (
          <WeatherCard key={index} {...data} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default WeatherSearch; 