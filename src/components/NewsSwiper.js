import React, {useEffect, useState} from 'react';
import {getSelectedArticles} from './utils/utils';
import {Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderTitle from './Header';
import {useSelector, useDispatch} from 'react-redux';
import CountryPicker from './CountryPicker';
import {setCountry, setCountryPicker} from '../actions/Action';
const moment = require('moment');
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
} from 'native-base';

const NewsSwiper = ({searchName, navigation, code, name}) => {
  const [content, setContent] = useState([]);
  const dispatch = useDispatch();
  const showCountryPicker = useSelector((state) => state.showCountryPicker);
  const handleArticles = (response) => {
    return getSelectedArticles(response.data.articles, 'All News');
  };
  const handleSelectedCountry = (countryCode, countryName) => {
    const country = {
      code: countryCode,
      name: countryName,
    };
    dispatch(setCountry(country));
    dispatch(setCountryPicker(false));
  };
  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${code}&category=General&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        setContent(handleArticles(response));
      });
  }, [code]);
  return (
    <Container>
      {showCountryPicker ? (
        <CountryPicker handleSelectedCountry={handleSelectedCountry} />
      ) : (
        <>
          <HeaderTitle
            navigation={navigation}
            handleCountryPicker={() => {}}
            selectedCountry=""
            name={name}
          />
          <View>
            {content.length > 0 && (
              <DeckSwiper
                dataSource={content}
                renderItem={(item) => (
                  <Card style={{flex: 0}}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: item.urlToImage}} />
                        <Body>
                          <Text style={{fontSize: 20}}>{item.source.name}</Text>
                          <Text note>
                            {moment(item.publishedAt).startOf('hour').fromNow()}
                          </Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Image
                          source={{uri: item.urlToImage}}
                          style={{height: 300, width: 400, flex: 1}}
                        />
                        <Text style={{fontSize: 20}}>{item.description}</Text>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                          <Icon name="user-edit" size={15} color="#0391FD" />
                          <Text>{item.author}</Text>
                        </Button>
                      </Left>
                    </CardItem>
                  </Card>
                )}
              />
            )}
          </View>
        </>
      )}
    </Container>
  );
};

export default NewsSwiper;
