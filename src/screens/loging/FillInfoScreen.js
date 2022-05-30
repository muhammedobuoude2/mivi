import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const FillInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>أكمل بيانات ملفك </Text>
            </View>

            <View style={styles.FormView}>

                <TextInput style={styles.TextInput} placeholder={'الاسم كامل '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'تاريخ الميلاد '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'الايميل '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={' رقم الهاتف'} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'الجنس '} placeholderTextColor={'#8D8D8D'} />

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

    textTitle: {      //تسجيل الدخول   
        fontSize: 22,
        color: '#262AE1',
        fontWeight: "medium",
        marginTop: 80, fontFamily: 'GESSTwoBold',




    },
    FormView: {
        width: '100%',
        alignItems: 'center',
        top: 120


    },

    innerText: {    //اسم المستخدم
        fontSize: 16,
        color: '#000000',
        fontWeight: "light",
        marginTop: 20,
        marginLeft: 15,
        marginBottom: -15,
        right: 150, fontFamily: 'GESSTwoBold',




    },
    TextInput: {

        width: '80%',
        borderWidth: 1,
        borderColor: '#C5C6FF',
        height: 48,
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 20,
        fontFamily: 'GESSTwoBold',
        fontSize: 14



    },
    Button: {
        width: '80%',
        height: 52,
        backgroundColor: '#262AE1',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 20

    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'medium',
        fontFamily: 'GESSTwoBold',

    },





});
export default FillInfoScreen;