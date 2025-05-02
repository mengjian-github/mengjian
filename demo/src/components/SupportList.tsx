import React from 'react';
import styled from 'styled-components';

interface Supporter {
  name: string;
  email: string;
  avatar: string;
}

const supporters: Supporter[] = [
  { name: 'Alex Tijero', email: 'alextijero@ymail.com', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Luka Marr', email: 'lukamarcec1995@gmail.com', avatar: 'https://i.pravatar.cc/150?u=luka' },
  { name: 'memoryblade', email: 'mglim486@gmail.com', avatar: 'https://i.pravatar.cc/150?u=memory' },
  { name: 'Bill Hoo', email: 'billhoo@126.com', avatar: 'https://i.pravatar.cc/150?u=bill' },
  { name: 'Vinh Bui', email: 'qvsoft@gmail.com', avatar: 'https://i.pravatar.cc/150?u=vinh' },
  { name: 'Hunter Paramore', email: 'hparamore@gmail.com', avatar: 'https://i.pravatar.cc/150?u=hunter' },
  { name: '@foshagbemi', email: 'foshagbemi@hotmail.com', avatar: 'https://i.pravatar.cc/150?u=fosh' },
  { name: 'dorianzlatan', email: 'dorian@hey.com', avatar: 'https://i.pravatar.cc/150?u=dorian' },
  { name: 'Amanda', email: 'amandawilloughby@gmail.com', avatar: 'https://i.pravatar.cc/150?u=amanda' },
  { name: 'kitty-toft@hotmail.com', email: 'kitty-toft@hotmail.com', avatar: 'https://i.pravatar.cc/150?u=kitty' },
  { name: 'Zahir Patel', email: 'thezpdesign@gmail.com', avatar: 'https://i.pravatar.cc/150?u=zahir' },
];

const Container = styled.div`
  background: #FFFFFF;
  padding: 24px 32px;
  width: 568px;
`;

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.333;
  margin: 0 0 16px 0;
  color: #000000;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ListItem = styled.div`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.85);
`;

const Email = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.571;
  color: rgba(0, 0, 0, 0.45);
`;

const SupportList: React.FC = () => {
  return (
    <Container>
      <Title>Supporters</Title>
      <List>
        {supporters.map((supporter, index) => (
          <ListItem key={index}>
            <Avatar src={supporter.avatar} alt={supporter.name} />
            <Info>
              <Name>{supporter.name}</Name>
              <Email>{supporter.email}</Email>
            </Info>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SupportList; 