import React, {useRef} from 'react';
import {Header, Left, Body, Right, Title, Drawer, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderTitle = ({navigation}) => {
  return (
    <>
      <Header>
        <Left style={{flex: 1}}>
          <Icon
            name="navicon"
            size={20}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          />
        </Left>
        <Body style={{flex: 1}}>
          <Title style={{alignSelf: 'center'}}>News - India</Title>
        </Body>
        <Right style={{flex: 1}} />
      </Header>
    </>
  );
};
export default HeaderTitle;
