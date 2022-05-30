import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, Pressable } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.container}>
                <View style={styles.head}>
                    <Pressable style={{ width: 25, height: 20, left: 15, paddingHorizontal: 10, alignItems: 'flex-start' }} onPress={() => navigation.navigate('TabEx')}>
                        <Image style={styles.imgHead1} source={require('../assets/return.png')} />
                    </Pressable>
                    <Text style={styles.textTitle}>ملفي الشخصي </Text>
                    <Image style={styles.imgHead2} source={require('../assets/menu.png')} />
                </View>

                <Image style={styles.img} source={require('../assets/profile.png')} />
                <Image style={styles.editImg} source={require('../assets/edit.png')} />

                <Text style={styles.name}>ميرنا زياد</Text>
            </View>

            <View style={styles.FormView}>

                <View style={styles.onPress}>
                    <Image style={styles.icon} source={require('../assets/editProf.png')} />
                    <TextInput style={styles.TextInput} onPress={() => { () => navigation.navigate('TabEx') }} placeholder={' تعديل الملف الشخصي '} placeholderTextColor={'#8D8D8D'} />
                </View>

                <View style={styles.onPress}>
                    <Image style={styles.icon} source={require('../assets/notify.png')} />
                    <TextInput style={styles.TextInput} placeholder={'الاشعارات  '} placeholderTextColor={'#8D8D8D'} />
                </View>

                <View style={styles.onPress}>
                    <Image style={styles.icon} source={require('../assets/language.png')} />
                    <TextInput style={styles.TextInput} placeholder={'اللغة '} placeholderTextColor={'#8D8D8D'} />
                </View>


                <View style={styles.onPress}>
                    <Image style={styles.icon} source={require('../assets/call.png')} />
                    <TextInput style={styles.TextInput} placeholder={' تواصل معنا '} placeholderTextColor={'#8D8D8D'} />
                </View>

            </View>
            <TouchableOpacity style={styles.Button}>
                <Image style={styles.logOutImg} source={require('../assets/logout.png')} />
                <Text style={styles.textButton}>تسجيل الخروج</Text>
            </TouchableOpacity>
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
        position: 'relative',


    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',

        width: '100%',



    },
    imgHead1: {
        left: 2,
        width: 20,
    },
    imgHead2: {
        left: 210

    },

    textTitle: {
        fontSize: 16,
        color: '#000000',
        fontWeight: "medium",
        marginTop: 20,
        left: 115,
        fontFamily: 'GESSTwoBold',

    },
    name: {
        top: 10,
        color: '#000000',
        fontSize: 16,
        fontWeight: "medium",
        fontFamily: 'GESSTwoBold',

    },
    img: {
        top: 20
    },
    editImg: {
        right: 24,
        top: 5
    },
    FormView: {
        width: '79%',
        alignItems: 'center',
        top: 40,
        borderColor: '#C5C6FF',
        borderRadius: 10,
        backgroundColor: '#ffffff',

    },
    onPress: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    icon: {
        right: 10,
        top: 14

    },
    TextInput: {
        width: '80%',
        borderWidth: 0,
        backgroundColor: '#FFFFFF',
        borderColor: '#C5C6FF',
        marginTop: 0,
        paddingLeft: 5,
        fontFamily: 'GESSTwoBold',

    },
    Button: {
        width: '80%',
        height: 52,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 60,


    },
    textButton: {
        color: '#FB0000',
        fontSize: 15,
        fontWeight: 'medium',
        top: 15,
        right: 80,
        fontFamily: 'GESSTwoBold',


    },

    logOutImg: {
        right: 85,
        top: 19
    }




});

export default ProfileScreen;