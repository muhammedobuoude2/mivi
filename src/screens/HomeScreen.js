import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity

} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import COLORS from '../consts/colors';
const { width } = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import data from '../consts/slid';
const Tab = createBottomTabNavigator();
import DetailsScreen from './DetailsScreen';
import DataShali from '../consts/DataSalih'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';




const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);



  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <StatusBar translucent={false} backgroundColor={COLORS.white} barStyle='dark-content' />
      <View style={style.header}>
        <View>
          <Pressable onPress={() => navigation.navigate('UserCreateScreen')}>
            <Image source={require('../assets/IconNaveg.png')} style={{ width: 20, height: 20, marginLeft: 320, marginVertical: 20 }} />
            <Image source={require('../assets/Iconpress.png')} style={{ width: 20, height: 20, marginLeft: 280, marginTop: -40 }} />
          </Pressable>
          <View />
          <Image source={require('../assets/MaskLegopng.png')} style={style.profileImage} />
        </View>
      </View>
      <View style={{
        marginVertical: 10
      }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginVertical: 0,
            marginHorizontal: -10,
            backgroundColor: '#262AE1',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: '#C4C4C4',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <View>
          <Text style={style.textTi}> تصنيف المناطق</Text>
        </View>
        <View>
          <ScrollView horizontal alignItems='center' Rtl style={{ marginStart: 10, width: 400, backgroundColor: 'white', borderRadius: 12, height: 80 }}>
            <View style={{
              backgroundColor: '#E5E5E5', borderRadius: 12, width: 120, height: 50
            }}>
              <Image source={require('../assets/gaze.png')} style={{
                borderRadius: 12, width: 135, height: 50, borderColor: '#E5E5E5', borderWidth: 0.5, marginRight: 22
              }} />
            </View>
            <View style={{
              backgroundColor: '#E5E5E5', borderRadius: 12, width: 120, height: 50, marginLeft: 20
            }}>
              <Image source={require('../assets/rafeh.png')} style={{
                borderRadius: 12, width: 135, height: 50, borderColor: '#E5E5E5', borderWidth: 0.5, marginRight: 22
              }} />
            </View>
            <View style={{
              backgroundColor: '#E5E5E5', borderRadius: 12, width: 120, height: 50, marginLeft: 20
            }}>
              <Image source={require('../assets/khan.png')} style={{
                borderRadius: 12, width: 135, height: 50, borderColor: '#E5E5E5', borderWidth: 0.5, marginRight: 22
              }} />
            </View>
            <View style={{
              borderRadius: 12, width: 120, height: 50, marginLeft: 20
            }}>
              <Image source={require('../assets/middel.png')} style={{
                borderRadius: 12, width: 135, height: 50, borderColor: '#E5E5E5', borderWidth: 0.5, marginRight: 22
              }} />
            </View>
            <Pressable onPress={() => navigation.navigate('OnBoardScreen2')}>
              <View style={{
                borderRadius: 12, width: 120, height: 50, marginLeft: 20, marginRight: 30
              }}>
                <Image source={require('../assets/north.png')} style={{
                  borderRadius: 12, width: 135, height: 50, borderColor: '#E5E5E5', borderWidth: 0.5, marginRight: 22
                }} />
              </View>
            </Pressable>

          </ScrollView>
          <View>
            <Text style={style.textTi}> أعلى تقييماً</Text>
          </View>
          <View style={{ alignItems: 'flex-end', marginHorizontal: 15, marginVertical: -23 }}>
            <Text style={style.textsub}> عرض الكل</Text>
          </View>

        </View>

      </View>

      <DetailsScreen />



    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  textTi: {
    fontSize: 20,
    fontFamily: 'GESSTwoBold',
    fontStyle: 'normal',
    color: '#000000',
    paddingRight: 20,
    paddingTop: 0,
    fontWeight: 'bold'
  },
  textsub: {
    fontSize: 12,
    fontFamily: 'GESSTwoBold',
    color: '#262AE1',
  },
  carousal: {
    maxHight: 300
  },
  image1: {
    width: WIDTH,
    height: 250,
    resizeMode: 'cover',

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: 'black'
  }, footerText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold'
  },


  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  profileImage: {
    height: 36,
    width: 67,
    marginHorizontal: 10,
    marginTop: -30
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});
const renderItem = ({ item }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: 'white'
        , width: 350, height: 180,
        paddingRight: 50

      }}>
      <Image source={{ uri: item.url }} style={{
        width: 340, height: 180, borderRadius: 20, paddingLeft: 20, alignItems: 'center'
      }} />
    </View>
  );
};

export default HomeScreen;
