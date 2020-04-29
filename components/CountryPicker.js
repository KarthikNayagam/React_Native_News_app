import React, {Component, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Body,
  Thumbnail,
  Item,
  Input,
  Button,
} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
let argentina = require('../images/argentina.jpg');
let australia = require('../images/australia-small.png');
let austria = require('../images/austria.jpg');
let belgium = require('../images/belgium.jpg');
let brazil = require('../images/brazil.jpg');
let bulgaria = require('../images/bulgaria.jpg');
import {countryList} from './constants/constants';
const CountryPicker = ({handleSelectedCountry}) => {
  const [enteredText, setEnteredText] = useState('');
  const handleEnteredText = (text) => {
    setEnteredText(text);
  };
  return (
    <>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            value={enteredText}
            onChange={(text) => handleEnteredText(text)}
          />
          <Icon name="close" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <ScrollView>
        <List>
          {countryList.map((country) => {
            return (
              <>
                <ListItem itemDivider>
                  <Text>{country.dividerText}</Text>
                </ListItem>
                {country.list.map((eachCountry) => {
                  return (
                    <ListItem
                      thumbnail
                      onPress={() =>
                        handleSelectedCountry(
                          eachCountry.countryCode,
                          eachCountry.countryName,
                        )
                      }>
                      <Left>
                        <Thumbnail
                          circle
                          source={eachCountry.imageUrl}
                          style={{width: 40, height: 40}}
                        />
                      </Left>
                      <Body>
                        <Text>{eachCountry.countryName}</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </ListItem>
                  );
                })}
              </>
            );
          })}
        </List>
      </ScrollView>
    </>
  );
};

export default CountryPicker;
