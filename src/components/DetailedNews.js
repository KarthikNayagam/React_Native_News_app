import React from 'react';
import {View, Text} from 'native-base';
import {WebView} from 'react-native-webview';

const MyWeb = ({detailedLink}) => {
  console.log('detailedLink', detailedLink);
  return (
    <WebView
      source={{
        uri: detailedLink,
      }}
      style={{marginTop: 20}}
    />
  );
};

export default MyWeb;
