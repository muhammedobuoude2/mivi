import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../consts/colors'
const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* الكلام الي فوق علشان يخلي التطبيق ممتد لاعلى شاشة الجوال */}
      <Image source={require('../assets/onboardImage1.jpg')} style={style.image} />
      <View style={{ paddingTop: 0 }}>
        <View>
          <Text style={style.title} > اعثر على مكان </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={style.textStyle}>هل تبحث عن مكان للاستجمام بشكل</Text>
        </View>
        <View style={{ paddingTop: 25}}>
          <Text style={style.textStyle}>خاص مع العائلة أو الأصدقاء؟</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Pressable onPress={() => navigation.navigate('OnBoardScreen2')}>
          <Image source={require('../assets/Icon1.png')} style={style.Icon} />
          <Text style={style.Icon1}>تخطي</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    marginHorizontal: 45, marginVertical: 114
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  Icon: {
    height: 50,
    width: 50,
    marginHorizontal: 167,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Icon1: {
    height: 50,
    width: 50,
    marginHorizontal: 177,
    paddingTop: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontSize:14,
    color:COLORS.grey,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'HelveticaNeue', fontSize: 30, fontWeight: 'bold', color: '#262AE1', textAlign: 'center',
    margin: 0, marginVertical: -80
  },
  textStyle: {
    fontSize: 20, color: COLORS.grey, marginVertical: -50, fontFamily: 'GE_SS_TWO_MEDIUM_5', letterSpacing: 3, textAlign: 'center',
  },
});
export default OnBoardScreen;

<Text style={style.textStyle}>لدينا شاليهات في جميع مناطق قطاع غزة</Text>

