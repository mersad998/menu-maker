import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {MyHeader, CoustomTextComponent} from 'utils/constants/elements';
import SideMenu from 'react-native-side-menu';
import CustomDrawer from 'utils/constants/CustomDrawer';
import {ColorThemeContext} from 'utils/Context/ColorThemeContext';
import FlashMessage from 'react-native-flash-message';
import {assetsObject} from '../../utils/constants/assets';
import PhotoEditor from './PhotoEditor';
import {RNPhotoEditor} from 'react-native-photo-editor';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

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
    console.log(resolveAssetSource('../../../assets/menu/menu_1_full.png'));
  }, []);

  const openPhotoEditor = () => {
    RNPhotoEditor.Edit({
      path:
        RNFS.DocumentDirectoryPath + '/../../../assets/menu/menu_1_full.png',
      stickers: [
        'sticker0',
        'sticker1',
        'sticker2',
        'sticker3',
        'sticker4',
        'sticker5',
        'sticker6',
        'sticker7',
        'sticker8',
        'sticker9',
        'sticker10',
      ],
      //   hiddenControls: ['clear', 'crop', 'draw', 'save', 'share', 'sticker', 'text'],
      colors: undefined,
      onDone: () => {
        console.log('on done');
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
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
      <View style={styles.Container(colors.Background)}>
        <View style={styles.UpperScope(colors.NavBar)}></View>

        <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.ImageContainerView}
            onPress={openPhotoEditor}>
            <CoustomTextComponent
              style={styles.TopOfImageDescription(
                colors.Background,
                colors.NavBar,
              )}>
              برای ویرایش روی عکس ضربه بزنید
            </CoustomTextComponent>
            <Image
              style={styles.MainImage}
              source={assetsObject[props.navigation.getParam('imageName')]}
            />
            {/* <PhotoEditor image={props.navigation.getParam('imageName')} /> */}
          </TouchableOpacity>
          <View style={styles.rightScopeView(colors.NavBar)}></View>
        </View>

        {/*  */}
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
  TopOfImageDescription: (text, Background) => {
    return {
      color: text,
      textAlign: 'center',
      backgroundColor: Background,
      borderColor: text,
      borderWidth: 0.5,
      marginLeft: 2,
    };
  },
});
