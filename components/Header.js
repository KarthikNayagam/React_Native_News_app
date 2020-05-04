import React, {useRef} from 'react';
import {Header, Left, Body, Right, Title, Drawer, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderTitle = ({navigation, handleCountryPicker, selectedCountry}) => {
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
          <Title style={{alignSelf: 'center'}}>
            News - {selectedCountry && selectedCountry.name}
          </Title>
        </Body>
        <Right style={{flex: 1}}>
          <Icon
            name="edit"
            size={20}
            color="#fff"
            style={{paddingLeft: 10}}
            onPress={() => handleCountryPicker()}
          />
        </Right>
      </Header>
    </>
  );
};
export default HeaderTitle;
