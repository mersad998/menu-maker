import React from 'react';
import {fromRight} from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// --------------------------------------------[صفحه ها ی برنامه]------------------------------------

// صفحه اسپلش
import SplashScreen from 'components/SplashScreen';
// صفحه اصلی
import MainComponent from 'components/MainComponent';
// صفحه ایجاد منو
import MakeMenu from 'components/MakeMenuComponent/MakeMenu';

export default function Routs() {
  const routs = createStackNavigator(
    {
      SplashScreen,
      MainComponent,
      MakeMenu,
    },
    {
      initialRouteName: 'SplashScreen',
      headerMode: 'none',
      transitionConfig: () => fromRight(150),
    },
  );
  const App = createAppContainer(routs);
  return <App />;
}
