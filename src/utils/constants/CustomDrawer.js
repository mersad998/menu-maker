import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {CoustomTextComponent} from 'utils/constants/elements';
import {
  white,
  backGroundGrey,
  ButtonRed,
  HeaderGrey,
  Gold,
} from 'utils/constants/colors';
import {Icon} from 'native-base';
import Dash from 'react-native-dash';
import {ColorThemeContext} from 'utils/Context/ColorThemeContext';

export default function CustomDrawer(props) {
  const {colors} = useContext(ColorThemeContext);

  const gotoMainPage = () => props.navigation.replace('MainComponent');
  const gotoSetting = () => props.navigation.navigate('Setting');

  return (
    <>
      <View>
        <View style={styles.drawerHeader(colors.NavBar)}>
          <View style={styles.DrawerImageArea}>
            <Image
              source={require('assets/logo.png')}
              style={styles.drawerImage}
            />
          </View>
          <View style={styles.DrawerTextArea}>
            <CoustomTextComponent style={styles.drawerHeaderText}>
              خوش آمدید
            </CoustomTextComponent>
            <View style={styles.rowView}>
              <CoustomTextComponent style={styles.NightModeIcon}>
                خاموش
              </CoustomTextComponent>
              <CoustomTextComponent style={styles.drawerName}>
                حالت شب
              </CoustomTextComponent>
            </View>
          </View>
        </View>
        <Dash
          dashGap={7}
          dashLength={15}
          dashColor={colors.NavBar}
          style={styles.Dash(colors.backgroundColor)}
        />
      </View>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.drawerItemContainer}
          onPress={gotoMainPage}>
          <Icon
            type="FontAwesome"
            name="home"
            style={styles.drawerItemIcon}
            color={white}
          />
          <CoustomTextComponent style={styles.drawerItemText}>
            لیست منو ها
          </CoustomTextComponent>
        </TouchableOpacity>
        <Dash
          dashGap={2}
          dashLength={10}
          dashColor={ButtonRed}
          dashThickness={1}
          style={{backgroundColor: backGroundGrey}}
        />
        {/* <TouchableOpacity
          style={styles.drawerItemContainerNoBorder}
          onPress={gotoSetting}>
          <Icon type="FontAwesome" name="gear" style={styles.drawerItemIcon} />
          <CoustomTextComponent style={styles.drawerItemText}>
            'language.txtSetting'
          </CoustomTextComponent>
        </TouchableOpacity>
        <Dash
          dashGap={2}
          dashLength={10}
          dashColor={ButtonRed}
          dashThickness={1}
          style={{backgroundColor: backGroundGrey}}
        /> */}

        <TouchableOpacity
          style={styles.drawerItemContainerNoBorder}
          onPress={() => BackHandler.exitApp()}>
          <Icon
            type="FontAwesome"
            name="remove"
            style={styles.drawerItemIconLogout}
          />
          <CoustomTextComponent style={styles.drawerItemTextLogout}>
            خروج از برنامه
          </CoustomTextComponent>
        </TouchableOpacity>
        <Dash
          dashGap={2}
          dashLength={10}
          dashColor={ButtonRed}
          dashThickness={1}
          style={{backgroundColor: backGroundGrey}}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backGroundGrey,
    borderLeftColor: ButtonRed,
    borderLeftWidth: 0.5,
  },
  drawerHeader: (color) => {
    return {
      backgroundColor: color,
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderLeftColor: ButtonRed,
      borderLeftWidth: 0.5,
    };
  },
  drawerHeaderText: {
    color: white,
    fontSize: 14,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
  drawerName: {
    color: white,
    fontSize: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    textAlign: 'right',
    marginRight: 5,
  },
  drawerImage: {
    margin: 5,
    width: 80,
    height: 80,
  },
  DrawerTextArea: {
    flex: 2,
  },
  DrawerImageArea: {
    flex: 1,
  },
  logOutButton: {
    color: 'tomato',
  },
  drawerItemContainer: {
    paddingVertical: 5,
    marginHorizontal: 3,
    borderBottomColor: Gold,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 50,
  },
  drawerItemContainerNoBorder: {
    paddingVertical: 5,
    marginHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 50,
  },

  drawerItemText: {
    color: 'grey',
    fontSize: 14,
  },
  drawerItemIcon: {
    color: ButtonRed,
    fontSize: 20,
  },
  drawerItemTextLogout: {
    color: 'tomato',
    fontSize: 14,
  },
  drawerItemIconLogout: {
    color: 'tomato',
    fontSize: 20,
  },
  informationView: {
    height: 120,
    borderLeftColor: ButtonRed,
    borderLeftWidth: 0.5,
    backgroundColor: HeaderGrey,
    paddingHorizontal: 5,
  },
  rowView: {
    flexDirection: 'row',
  },
  rowViewNoBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  Dash: (color) => {
    return {
      backgroundColor: color,
    };
  },
  infoTitle: {
    fontSize: 11.5,
    paddingHorizontal: 2,
  },
  infoUnit: {
    fontSize: 11,
    color: 'grey',
  },
  infoNumberBlue: {
    paddingHorizontal: 5,
    color: 'steelblue',
    fontSize: 11,
  },
  infoNumberGold: {
    paddingHorizontal: 5,
    color: Gold,
    fontSize: 11,
  },
  infoNumberGreen: {
    color: 'green',
    fontSize: 11,
  },
  infoCheckOutGreen: {
    fontSize: 11,
    paddingHorizontal: 5,
    color: 'green',
  },
  infoCheckOutGreenIcon: {
    fontSize: 15,
    color: 'green',
  },
  infoCheckOutRed: {
    fontSize: 11,
    paddingHorizontal: 5,
    color: 'red',
  },
  infoCheckOutRedIcon: {
    fontSize: 15,
    color: 'red',
  },
  NightModeIcon: {
    color: white,
    fontSize: 10,
    marginTop: 5,
    textAlign: 'left',
    flex: 1,
    marginLeft: 10,
  },
});
