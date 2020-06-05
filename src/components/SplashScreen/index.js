import React, {useEffect, useContext} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {CoustomTextComponent} from 'utils/constants/elements';
import {Spinner} from 'native-base';
import {Background} from 'utils/constants/elements';
import {ColorThemeContext} from '../../../src/utils/Context/ColorThemeContext';
import MainColors from 'utils/Context/MainColors';
import {getAppGeneralInfo} from 'utils/database/AppGeneralInfo';
import {darkPink} from 'utils/constants/colors';

export default function SplashScreen(props) {
  const {colors, setColors} = useContext(ColorThemeContext);

  const setTheme = async () => {
    const info = await getAppGeneralInfo();

    if (info) {
      const themeNumber = info.ThemeNumber;
      const Lang = info.Language;
      const fontNumber = info.FontNumber;

      switch (themeNumber) {
        case '1':
          setColors(MainColors.Theme_1);
          break;
        case '2':
          setColors(MainColors.Theme_2);
          break;
        case '3':
          setColors(MainColors.Theme_3);
          break;
        case '4':
          setColors(MainColors.Theme_4);
          break;
        case '5':
          setColors(MainColors.Theme_5);
          break;
        case '6':
          setColors(MainColors.Theme_6);
          break;
        case '7':
          setColors(MainColors.Theme_7);
          break;
        case '8':
          setColors(MainColors.Theme_8);
          break;
        case '9':
          setColors(MainColors.Theme_9);
          break;
        case '10':
          setColors(MainColors.Theme_10);
          break;
        case '11':
          setColors(MainColors.Theme_11);
          break;
        case '12':
          setColors(MainColors.Theme_12);
          break;
        case '13':
          setColors(MainColors.Theme_13);
          break;
        case '14':
          setColors(MainColors.Theme_14);
          break;
        case '15':
          setColors(MainColors.Theme_15);
          break;
        default:
          setColors(MainColors.Theme_1);
          break;
      }
    } else {
      setColors(MainColors.Theme_1);
    }
  };

  useEffect(() => {
    setTheme();
    setTimeout(() => {
      props.navigation.replace('MainComponent');
    }, 3000);
  }, []);

  return (
    <Background>
      <View style={styles.Container}>
        <StatusBar backgroundColor={'#2d0406'} />
        <Image
          resizeMode={'stretch'}
          source={require('assets/logo.png')}
          style={styles.Image}
        />
        <CoustomTextComponent style={styles.Text}>
          به سیستم هوشمند منو ساز خوش آمدید
        </CoustomTextComponent>
        <CoustomTextComponent style={styles.TextSlagon}>
          فرصت‌ها اتفاق نمی‌افتند، شما خالق آن‌ها هستید.
        </CoustomTextComponent>
        <CoustomTextComponent style={styles.TextSlagonOwner}>
          کریس گروسر (کارآفرین)
        </CoustomTextComponent>

        <View style={styles.BottomLayout}>
          <Spinner color="white" style={styles.Spinner} />
          <CoustomTextComponent style={styles.TextDescription}>
            در حال بارگذاری ...
          </CoustomTextComponent>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  Image: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: '20%',
  },
  Text: {
    marginTop: 30,
    color: 'white',
    fontSize: 16,
  },
  TextSlagon: {marginTop: 60, color: '#beab80', fontSize: 14},
  TextSlagonOwner: {marginTop: 5, color: '#beab80', fontSize: 12},
  Spinner: {
    marginTop: 30,
  },
  TextDescription: {
    marginTop: 8,
    color: 'white',
    fontSize: 12,
  },
  BottomLayout: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
});
