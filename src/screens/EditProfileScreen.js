import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';



const EditProfileScreen = ({ navigation }) => {
    return (

        <View style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.container}>
                <Image style={styles.img} source={require('../assets/return.png')} />
                <Text style={styles.textTitle}> تعديل الملف الشخصي </Text>
            </View>
            <View style={styles.FormView}>

                <TextInput style={styles.TextInput} placeholder={'   ميرنا زياد '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'5-11-2000  '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'e.mmmmm@gmail.com '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={' +972592000000  '} placeholderTextColor={'#8D8D8D'} />
                <TextInput style={styles.TextInput} placeholder={'أنثى'} placeholderTextColor={'#8D8D8D'} />

            </View>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.textButton}> حفظ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button1}>
                <Text style={styles.textButton1}> إلغاء</Text>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        top: -220,
        bottom: 60

    },

    textTitle: {
        fontSize: 22,
        color: '#000000',
        fontWeight: "medium",
        marginTop: 26,
    },
    img: {
        right: 64
    },
    FormView: {
        width: '100%',
        alignItems: 'center',
        top: -80,
        borderColor: '#C5C6FF',

    },
    TextInput: {
        width: '80%',
        borderWidth: 0,
        height: 48,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginTop: 20,
        paddingRight: 15,
        paddingLeft: 15,

    },
    Button: {
        width: '80%',
        height: 52,
        backgroundColor: '#262AE1',
        borderRadius: 10,
        marginTop: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
        top:-100


    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'medium',

    },
    textButton1: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'medium',

    },
    Button1: {
        width: '80%',
        height: 52,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
        top: -100
    }





});

export default EditProfileScreen;