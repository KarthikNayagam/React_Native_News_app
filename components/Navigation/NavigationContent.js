import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons';
const NavigationContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View>
          <Text>Main Content</Text>
        </View>

        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            // icon={({color, size}) => (
            //   <Icon name="exit-to-app" color={color} size={size} />
            // )}
            label="All News"
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
});
