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

const OnBoardScreen2 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* الكلام الي فوق علشان يخلي التطبيق ممتد لاعلى شاشة الجوال */}
            <Image source={require('../assets/onboardImage2.jpg')} style={style.image} />
            <View style={{ paddingTop: 0 }}>
                <View>
                    <Text style={style.title} > نحن نهتم بك </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={style.textStyle}>لدينا شاليهات في جميع مناطق غزة</Text>
                </View>
                <View style={{ paddingTop: 25 }}>
                    <Text style={style.textStyle}>متوفر فيها كل اشكال المرح</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
                < Pressable onPress={() => navigation.navigate('SignInScreen')}>
                    <Image source={require('../assets/Icon1.png')} style={style.Icon} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
        marginHorizontal:0, marginVertical: 45
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
        marginVertical:45
    },
    Icon1: {
        height: 50,
        width: 50,
        marginHorizontal: 177,
        paddingTop: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 14,
        color: COLORS.grey,
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
        margin: 0, marginVertical: -140
    },
    textStyle: {
        fontSize: 20, color: COLORS.grey, marginVertical: -100, fontFamily: 'GE_SS_TWO_MEDIUM_5', letterSpacing: 3, textAlign: 'center',
    },
});
export default OnBoardScreen2;
