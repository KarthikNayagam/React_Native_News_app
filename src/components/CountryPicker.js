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
import {defaultCountryList} from '../constants/constants';
const CountryPicker = ({handleSelectedCountry}) => {
  const [enteredText, setEnteredText] = useState('');
  const [countryList, setCountryList] = useState(defaultCountryList);
  const handleEnteredText = (text) => {
    handleSearchChange(text.nativeEvent.text);
    setEnteredText(text.nativeEvent.text);
  };
  const handleSearchChange = (text) => {
    let searchedParentObj = '';
    if (text.length > 0) {
      searchedParentObj = defaultCountryList.find((obj) => {
        return (
          obj.dividerText.toLowerCase().substring(0, 1).trim() ===
          text.toLowerCase().substring(0, 1).trim()
        );
      });
      if (typeof searchedParentObj !== 'undefined') {
        const searchedObj = searchedParentObj.list.filter((obj) => {
          return obj.countryName.toLowerCase().indexOf(text) !== -1;
        });

        searchedParentObj = {...searchedParentObj, list: searchedObj};
        setCountryList([searchedParentObj]);
      } else {
        setCountryList(defaultCountryList);
      }
    } else {
      setCountryList(defaultCountryList);
    }
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
          {enteredText.length > 0 && (
            <Icon name="close" onPress={() => setEnteredText('')} />
          )}
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
