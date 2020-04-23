import React from 'react';
import {Header, Left, Body, Right, Title} from 'native-base';
const HeaderTitle = () => {
  return (
    <Header>
      <Left style={{flex: 1}} />
      <Body style={{flex: 1}}>
        <Title style={{alignSelf: 'center'}}>News</Title>
      </Body>
      <Right style={{flex: 1}} />
    </Header>
  );
};
export default HeaderTitle;
