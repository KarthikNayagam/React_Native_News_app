import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

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
const RenderNews = ({category, loading, content}) => {
  return (
    <>
      {loading ? (
        <Spinner color="blue" />
      ) : (
        <ScrollView>
          {content &&
            content.map((obj) => {
              return (
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square source={{uri: obj.urlToImage}} />
                    </Left>
                    <Body>
                      {/* <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text> */}
                      <Text>{obj.title}</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
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
