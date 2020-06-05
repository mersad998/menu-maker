import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {assetsObject} from '../../utils/constants/assets';
import {
  CoustomTextComponent,
  CoustomButtonComponent,
} from 'utils/constants/elements';
const {width: screenWidth} = Dimensions.get('window');

const CofeeshopMenus = [
  {
    id: 1,
    imageName: 'logo',
    title: 'Beautiful and dramatic Antelope Canyon',
  },
  {
    id: 2,
    imageName: 'menu_1',
    title: 'منوی مخصوص کافی شاپ',
  },
];
const InstagramMenus = [
  {
    id: 1,
    imageName: 'logo',
    title: 'Beautiful and dramatic Antelope Canyon',
  },
  {
    id: 2,
    imageName: 'menu_1',
    title: 'منوی مخصوص کافیشاپ',
  },
];
const TracketMenus = [
  {
    id: 1,
    imageName: 'logo',
    title: 'Beautiful and dramatic Antelope Canyon',
  },
  {
    id: 2,
    imageName: 'menu_1',
    title: 'منوی مخصوص کافیشاپ',
  },
];

const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
    console.log(carouselRef.current);
  };

  useEffect(() => {
    if (props.type === 'Cofeeshop') {
      setEntries(CofeeshopMenus);
    }
    if (props.type === 'Instagram') {
      setEntries(InstagramMenus);
    }
    if (props.type === 'Tracket') {
      setEntries(TracketMenus);
    }
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.navigation.navigate('MakeMenu', {
            id: item.id,
            imageName: item.imageName,
          });
        }}>
        <ParallaxImage
          source={assetsObject[item.imageName]}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <CoustomTextComponent style={styles.title} numberOfLines={2}>
          {item.title}
        </CoustomTextComponent>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />

      <CoustomButtonComponent onPress={goForward} name="برو بعدی" />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - screenWidth / 2.5,
    height: screenWidth,
    alignSelf: 'center',
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    alignSelf: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  goForward: {
    backgroundColor: 'yellow',
  },
});
