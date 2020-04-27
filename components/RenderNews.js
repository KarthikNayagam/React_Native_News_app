import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
const moment = require('moment');
import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Spinner,
} from 'native-base';

const RenderNews = ({category, loading, content, handleViewClicked}) => {
  return (
    <>
      {loading ? (
        <Spinner color="blue" />
      ) : (
        <ScrollView>
          {content &&
            content.map((obj, index) => {
              console.log(' obj.urlToImage', obj);
              return (
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{uri: obj.urlToImage}} />
                    </Left>
                    <Body>
                      <Text
                        onPress={() => {
                          handleViewClicked(obj.url);
                        }}>
                        {obj.title}
                      </Text>
                      <Text note numberOfLines={1}>
                        {moment(obj.publishedAt).startOf('hour').fromNow()}
                      </Text>
                    </Body>
                  </ListItem>
                </List>
              );
            })}
        </ScrollView>
      )}
    </>
  );
};

export default RenderNews;
