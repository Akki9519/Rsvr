import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 36;
const CARD_HEIGHT = 220;
import {useNavigation} from '@react-navigation/native';
const LatestTour = ({list}: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      {list.map((item: any) => {
        return (
          <ScrollView>
            <TouchableOpacity
              style={styles.cardContainer}
              key={item.id}
              onPress={() => {
                navigation.navigate('Detail', {list: item});
              }}>
              <View style={[styles.card, styles.shadow]}>
                <View style={styles.imageBox}>
                  <Image style={styles.image} source={item.photo} />
                </View>
                <View style={styles.footer}>
                  <View style={styles.titleBox}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: 24,
    marginBottom: 24,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'ffffff',
    borderRadius: 16,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 40,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginLeft: -10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#070f18',
    marginTop: -18,
  },
  location: {
    fontSize: 14,
    color: '#b2b2b2',
  },
  shadow: {
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default LatestTour;
