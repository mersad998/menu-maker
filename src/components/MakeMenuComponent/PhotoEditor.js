import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import {RNPhotoEditor} from 'react-native-photo-editor';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import {assetsObject} from '../../utils/constants/assets';

import logo from '../../../assets/logo.png';

type Props = {
  colors?: Array<string>,
  hiddenControls?: Array<string>,
  onCancel?: (any) => void,
  onDone?: (any) => void,
  path: string,
  stickers?: Array<string>,
};

export default class App extends Component<Props> {
  _onPress = () => {
    RNPhotoEditor.Edit({
      path: '../../../assets/logo.png',
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

  componentDidMount() {
    let photoPath = '../../../assets/logo.png';
    let binaryFile = resolveAssetSource(logo);

    RNFetchBlob.config({fileCache: true})
      .fetch('GET', binaryFile.uri)
      .then((resp) => {
        RNFS.moveFile(resp.path(), photoPath)
          .then(() => {
            console.log('FILE WRITTEN!');
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Image
            style={styles.MainImage}
            source={assetsObject[this.props.image]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainImage: {
    resizeMode: 'stretch',
    flex: 1,
  },
});
