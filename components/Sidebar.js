import React from 'react';
import {View, Text, Content} from 'native-base';

const SideBar = ({detailedLink}) => {
  console.log('detailedLink', detailedLink);
  return (
    <Content style={{backgroundColor: 'red'}}>
      <Text style={{color: '#fff'}}>Drawer</Text>
    </Content>
  );
};

export default SideBar;
