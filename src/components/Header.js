import React from 'react';
import {Header, Left, Body, Right, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {setCountryPicker} from '../actions/Action';
const HeaderTitle = ({navigation, name}) => {
  const dispatch = useDispatch();
  const handleCountryPicker = () => {
    dispatch(setCountryPicker(true));
  };
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
          <Title style={{alignSelf: 'center'}}>News - {name && name}</Title>
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
