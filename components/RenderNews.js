import React from 'react';
import {View, Text} from 'native-base';

const RenderNews = ({category}) => {
  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default RenderNews;
