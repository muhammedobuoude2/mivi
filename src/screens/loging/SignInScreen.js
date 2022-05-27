import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import IconButton from 'react-native-vector-icons/dist/lib/icon-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function SignInScreen(navigation) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>تسجيل الدخول</Text>
            </View>

            <View style={styles.FormView}>
                <Text style={styles.innerText}>اسم المستخدم</Text>
                <TextInput style={styles.TextInput} keyboardType='default' placeholder={'محمد'} placeholderTextColor={'#8D8D8D'} />
                <Text style={styles.innerText1}>كلمة المرور</Text>
                <TextInput style={styles.TextInput} keyboardType='visible-password' placeholder={'كلمة المرور'} secureTextEntry={true} placeholderTextColor={'#8D8D8D'} />
                <View style={styles.underPass}>

                    <Text style={styles.textQuestion}>هل نسيت كلمة المرور ؟</Text>
                </View>
                <Pressable onPress={() => this.props.navigation.navigate('TabEx')} style={styles.Button} >
                    <Text style={styles.textButton}>تسجيل دخول</Text>
                </Pressable>

                <Text style={styles.comment}>أو سجل من خلال</Text>
                <View style={styles.links}>
                    <Image source={require('./facebook.png')} style={{ backgroundColor: '#0000', width: 25, height: 25 }} />
                    <Image source={require('./google.png')} style={{ backgroundColor: '#0000', marginLeft: 20, width: 25, height: 25 }} />
                </View>

                <Text style={styles.createAcount1}>أليس لديك حساب؟</Text>
                <Text style={styles.createAcount}>أنشئ حساب</Text>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0000',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',

    },

    textTitle: {      //تسجيل الدخول   
        fontSize: 22,
        color: '#262AE1',
        fontWeight: "500",
        marginTop: 140,
        fontFamily: 'GESSTwoBold',




    },
    FormView: {
        width: '100%',
        alignItems: 'center'


    },
    innerText: {    //اسم المستخدم
        fontSize: 14,
        color: '#000000',
        fontWeight: "100",
        marginTop: 20,
        marginLeft: 55,
        marginBottom: -15,
        right: 150,
        fontFamily: 'GESSTwoBold',





    },
    innerText1: {    //اسم المستخدم
        fontSize: 14,
        color: '#000000',
        marginTop: 20,
        marginLeft: 25,
        marginBottom: -15,
        right: 150,
        fontFamily: 'GESSTwoBold',





    },
    TextInput: {

        width: '90%',
        borderWidth: 1,
        borderColor: '#C5C6FF',
        height: 43,
        borderRadius: 10,
        marginTop: 20,
        paddingRight: 15,
        textAlign: 'right'

    },
    Button: {
        width: '90%',
        height: 52,
        backgroundColor: '#262AE1',
        borderRadius: 10,
        marginTop: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'GE_SS_TWO_MEDIUM_5',
        fontWeight: '100',
        textAlign: 'center'


    },
    underPass: {
        width: '100%',
        display: 'flex',
        alignItems: "center",
        marginTop: 16,
    },
    textQuestion: {
        color: '#FCA602',
        fontSize: 13,
        fontWeight: '100',
        fontFamily: 'GE-SS-Two',

    },

    comment: {
        marginTop: 16,
        color: '#8D8D8D',
        fontSize: 12,
        fontWeight: '100',
        fontFamily: 'GE-SS-Two',

    },
    textIcon: {
        color: '#8D8D8D',
    },
    createAcount: {
        color: '#FCA602',
        marginTop: 20,
        fontFamily: 'GE-SS-Two',


    },
    createAcount1: {
        color: '#8D8D8D',
        marginTop: 90,
        fontFamily: 'GE-SS-Two',


    },
    links: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 45,
        padding: 20


    },

});