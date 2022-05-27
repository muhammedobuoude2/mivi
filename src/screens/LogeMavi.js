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
const LogeMavi = ({ navigation }) => {
    setTimeout(() => {
        () => navigation.replace('OnBoardScreen')
    }, 2000);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Pressable onPress={() => navigation.navigate('OnBoardScreen')}>
                {/* الكلام الي فوق علشان يخلي التطبيق ممتد لاعلى شاشة الجوال */}
                <Image source={require('../assets/LogeMavi.jpg')} style={style.image} />
            </Pressable>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
        marginHorizontal: 30, marginVertical: 264, width: 313, height: 284
    },
});
export default LogeMavi;
