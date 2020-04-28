import React, {Component} from 'react';
import {ScrollView} from 'react-native';
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
} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
let argentina = require('../images/argentina.jpg');
let australia = require('../images/australia-small.png');
let austria = require('../images/austria.jpg');
let belgium = require('../images/belgium.jpg');
let brazil = require('../images/brazil.jpg');
let bulgaria = require('../images/bulgaria.jpg');
import {countryList} from './constants/constants';
const ListDividerExample = () => {
  return (
    <ScrollView>
      <List>
        {countryList.map((country) => {
          return (
            <>
              <ListItem itemDivider>
                <Text>{country.dividerText}</Text>
              </ListItem>
              {country.list.map((eachCountry) => {
                console.log('eachCountry', eachCountry);
                return (
                  <ListItem thumbnail>
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
  );
};

export default ListDividerExample;
