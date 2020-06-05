import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';
import {MyHeader, CoustomTextComponent} from 'utils/constants/elements';
import SideMenu from 'react-native-side-menu';
import CustomDrawer from 'utils/constants/CustomDrawer';
import {ColorThemeContext} from 'utils/Context/ColorThemeContext';
import FlashMessage from 'react-native-flash-message';
import {assetsObject} from '../../utils/constants/assets';

export default function MakeMenu(props) {
  const {colors} = useContext(ColorThemeContext);
  const [drawer, setDrawer] = useState(false);

  const toggleNavBar = () => setDrawer((prevDrawer) => !prevDrawer);

  function afterToggleDrawer(state) {
    setTimeout(() => {
      setDrawer(state);
    }, 500);
  }

  useEffect(() => {
    console.log(props.navigation.getParam('imageName', ''));
  }, []);

  return (
    <SideMenu
      menu={<CustomDrawer navigation={props.navigation} />}
      menuPosition="right"
      onChange={(state) => {
        afterToggleDrawer(state);
      }}
      isOpen={drawer}
      bounceBackOnOverdraw={false}>
      <MyHeader
        Title="منو ساز"
        onHamburgerPress={toggleNavBar}
        hasNotification
      />
      <StatusBar backgroundColor={colors.Header} />
      <FlashMessage position="top" />
      <View style={styles.Container(colors.Background)}>
        <View style={styles.UpperScope(colors.NavBar)}></View>
        <View style={styles.rowView}>
          <View style={styles.ImageContainerView}>
            <Image
              style={styles.MainImage}
              source={assetsObject[props.navigation.getParam('imageName')]}
            />
          </View>
          <View style={styles.rightScopeView(colors.NavBar)}>
            
          </View>
        </View>
      </View>
    </SideMenu>
  );
}

const styles = StyleSheet.create({
  Container: (color) => {
    return {
      flex: 1,
      backgroundColor: color,
    };
  },
  UpperScope: (color) => {
    return {
      backgroundColor: color,
      width: '100%',
      height: 50,
      flexDirection: 'row',
    };
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
  },
  ImageContainerView: {
    flex: 1,
  },
  rightScopeView: (color) => {
    return {
      backgroundColor: color,
      height: '100%',
      width: 50,
    };
  },
  MainImage: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
});
