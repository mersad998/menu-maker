import React, {useState, useContext, useRef} from 'react';
import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {MyHeader, CoustomTextComponent} from 'utils/constants/elements';
import SideMenu from 'react-native-side-menu';
import CustomDrawer from 'utils/constants/CustomDrawer';
import {ColorThemeContext} from 'utils/Context/ColorThemeContext';
import {showMessage} from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';
import MyCarousel from './MyCarosel';
import {Icon, Content} from 'native-base';

export default function MainComponent(props) {
  const {colors} = useContext(ColorThemeContext);
  const [drawer, setDrawer] = useState(false);

  const toggleNavBar = () => setDrawer((prevDrawer) => !prevDrawer);

  function afterToggleDrawer(state) {
    setTimeout(() => {
      setDrawer(state);
    }, 500);
  }

  const Devider = ({name}) => {
    return (
      <View style={styles.CategoryDescription(colors.NavBar)}>
        <Icon
          type="FontAwesome"
          name="arrow-down"
          style={styles.CategoryDescriptionIcon(colors.Background)}
          color={'white'}
        />
        <CoustomTextComponent
          style={styles.CategoryDescriptionText(colors.Background)}>
          {name}
        </CoustomTextComponent>
      </View>
    );
  };

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
      <Content style={styles.Container(colors.Background)}>
        <Devider name="منو های مخصوص کافی شاپ" />
        <MyCarousel type="Cofeeshop" navigation={props.navigation} />
        <Devider name="منو های مخصوص استوری اینستا گرام" />
        <MyCarousel type="Instagram" navigation={props.navigation} />
        <Devider name="منو های مخصوص چاپ تراکت" />
        <MyCarousel type="Tracket" navigation={props.navigation} />
      </Content>
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
  CategoryDescription: (color) => {
    return {
      width: '100%',
      height: 50,
      backgroundColor: color,
      flexDirection: 'row',
      alignItems: 'center',
    };
  },
  CategoryDescriptionText: (color) => {
    return {
      flex: 1,
      color: color,
      marginRight: 15,
    };
  },
  CategoryDescriptionIcon: (color) => {
    return {
      color: color,
      marginLeft: 15,
    };
  },
});
