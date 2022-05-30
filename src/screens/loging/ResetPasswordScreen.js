import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>أدخل كلمة المرور الجديدة</Text>
            </View>

            <View style={styles.FormView}>

                <Text style={styles.innerText}>كلمة المرور الجديدة</Text>
                <TextInput style={styles.TextInput} keyboardType='visible-password' placeholder={'*******************'} secureTextEntry={true} placeholderTextColor={'#8D8D8D'} />
                <Text style={styles.innerText1}> تأكيد كلمة المرور</Text>
                <TextInput style={styles.TextInput} keyboardType='visible-password' placeholder={'*******************'} secureTextEntry={true} placeholderTextColor={'#8D8D8D'} />


                <TouchableOpacity onPress={() => navigation.navigate('TabEx')} style={styles.Button}>
                    <Text style={styles.textButton}>حفظ</Text>
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
        textAlign: 'center',
        marginRight: 5

    },

    textB: {
        top: 10

    },
    FormView: {
        width: '100%',
        alignItems: 'center',
        top: 70


    },
    innerText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: "100",
        marginTop: 20,
        right: 100,
        marginBottom: -15,
        alignContent: 'flex-start',
        flexDirection: 'column',

        fontFamily: 'GESSTwoBold',



    },
    innerText1: {
        fontSize: 16,
        color: '#000000',
        fontWeight: "100",
        marginTop: 20,
        marginLeft: -220,
        marginBottom: -18,
        alignContent: 'flex-start',
        flexDirection: 'column',
        fontFamily: 'GESSTwoBold',




    },
    TextInput: {

        width: '90%',
        borderWidth: 1,
        borderColor: '#C5C6FF',
        height: 43,
        borderRadius: 10,
        marginTop: 30,
        paddingRight: 15,
        textAlign: 'right'


    },
    Button: {
        width: '90%',
        height: 52,
        backgroundColor: '#FCA602',
        borderRadius: 10,
        marginTop: 43,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'medium'

    },







});
export default ResetPasswordScreen;
