import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 20px;
`;

const Background = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  height: 94px;
  background: linear-gradient(180deg, #3A3A6A 0%, #25244C 100%);
  border: 0.5px solid rgba(117, 130, 244, 0.5);
  border-radius: 24px;
  backdrop-filter: blur(50px);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #FFFFFF;
  opacity: 0.6;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  
  &:hover {
    opacity: 1;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const AddButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F5F5F9 0%, #DADFE7 100%);
  border: 0.2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    10px 10px 20px rgba(13, 20, 49, 0.5),
    -10px -10px 20px rgba(255, 255, 255, 0.5),
    inset 1px 1px 0.5px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const TabBar: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <IconButton>
          <img src="/images/house.png" alt="Home" />
        </IconButton>
        <IconButton>
          <img src="/images/map.png" alt="Map" />
        </IconButton>
      </Content>
      <AddButton>
        <img src="/images/plus.png" alt="Add" />
      </AddButton>
    </Container>
  );
};

export default TabBar; 