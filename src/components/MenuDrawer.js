import React, {Component} from 'react';
import {Drawer, Text} from 'native-base';
import SideBar from './Sidebar';
import Icon from 'react-native-vector-icons/FontAwesome';
class MenuDrawer extends Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <>
        <Drawer
          ref={(ref) => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        />
      </>
    );
  }
}

export default MenuDrawer;
