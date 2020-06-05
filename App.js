import React from 'react';
import Routs from './Routs';
import ColorThemeProvider from './src/utils/Context/ColorThemeContext';

export default class App extends React.Component {
  render() {
    return (
      <ColorThemeProvider>
        <Routs />
      </ColorThemeProvider>
    );
  }
}
