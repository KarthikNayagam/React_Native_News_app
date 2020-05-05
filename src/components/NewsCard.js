import React, {useEffect, useState} from 'react';
import {getSelectedArticles} from './utils/utils';
import {Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderTitle from './Header';
import {ScrollView} from 'react-native';
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
  Right,
} from 'native-base';

const NewsCard = ({searchName, navigation, url, code, name}) => {
  const [content, setContent] = useState([]);
  const handleArticles = (response) => {
    return getSelectedArticles(response.data.articles, searchName);
  };

  useEffect(() => {
    let domain = url.substring(url.indexOf('.') + 1);
    if (domain.indexOf('/') !== -1) {
      domain = domain.substring(0, domain.indexOf('/'));
    }

    axios
      .get(
        `http://newsapi.org/v2/everything?domains=${domain}&language=en&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        setContent(response.data.articles);
      });
  }, [url]);
  return (
    <Container>
      <HeaderTitle
        navigation={navigation}
        handleCountryPicker={() => {}}
        selectedCountry=""
        name={name}
      />
      <View>
        <ScrollView>
          {content.length > 0 &&
            content.map((item) => (
              <Card>
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
                      style={{height: 200, width: 400, flex: 1}}
                    />
                    <Text style={{fontSize: 20}}>{item.description}</Text>
                  </Body>
                </CardItem>
              </Card>
            ))}
        </ScrollView>
      </View>
    </Container>
  );
};

export default NewsCard;
