import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native';


const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>هل نسيت كلمة المرور؟</Text>
                <Text style={styles.textBody}>قم باسترجاع كلمة المرور الخاصة بك     </Text>
                <Text style={styles.textB}> من خلال البريد الالكتروني</Text>

            </View>

            <View style={styles.FormView}>

                <TextInput style={styles.TextInput} keyboardType='email-address' placeholder={'من خلال الايميل : aya****@gmail.com'} placeholderTextColor={'#8D8D8D'} />


                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')} style={styles.Button}>
                    <Text style={styles.textButton}>أرسل</Text>
                </TouchableOpacity>


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

    textTitle: {
        fontSize: 22,
        color: '#262AE1',
        fontWeight: "500",
        marginTop: 140,
        fontFamily: 'GESSTwoBold',


    },
    textBody: {
        fontSize: 16,
        color: '#666666',
        fontWeight: "100",
        marginTop: 23,
        // Top:42,
        fontFamily: 'GESSTwoBold',


    },
    textB: {
        top: 10,
        fontFamily: 'GESSTwoBold',


    },
    FormView: {
        width: '100%',
        alignItems: 'center'


    },
    innerText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: "100",
        marginTop: 23,
        marginLeft: 15,
        marginBottom: -15,
        right: 150,
        fontFamily: 'GESSTwoBold',




    },
    TextInput: {

        width: '90%',
        borderWidth: 1,
        borderColor: '#C5C6FF',
        height: 60,
        borderRadius: 10,
        marginTop: 80,
        paddingLeft: 38.5,
        fontFamily: 'GESSTwoBold',



    },
    Button: {
        width: '90%',
        height: 52,
        backgroundColor: '#FCA602',
        borderRadius: 10,
        marginTop: 43,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
    textButton: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'GESSTwoBold',


    },







});
export default ForgotPasswordScreen;