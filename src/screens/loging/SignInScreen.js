import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native';




export class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    changeEmail(value) {
        this.setState({ email: value })
    }
    changePassword(value) {
        this.setState({ password: value })
    }
    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>تسجيل الدخول</Text>
                </View>

                <View style={styles.FormView}>
                    <Text style={styles.innerText}>اسم المستخدم</Text>
                    <TextInput style={styles.TextInput} keyboardType='default' placeholder={'محمد'} placeholderTextColor={'#8D8D8D'} value={this.state.email} onChangeText={(value) => this.changeEmail(value)} />
                    <Text style={styles.innerText1}>كلمة المرور</Text>
                    <TextInput style={styles.TextInput} keyboardType='visible-password' placeholder={'كلمة المرور'} value={this.state.password} onChangeText={(value) => this.changePassword(value)} secureTextEntry={true} placeholderTextColor={'#8D8D8D'} />
                    <View style={styles.underPass}>
                        <Pressable onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                            <Text style={styles.textQuestion}>هل نسيت كلمة المرور ؟</Text>
                        </Pressable>

                    </View>
                    <TouchableOpacity style={styles.Button} onPress={() => this.login()} >
                        <Text style={styles.textButton}>تسجيل دخول</Text>
                    </TouchableOpacity>

                    <Text style={styles.comment}>أو سجل من خلال</Text>
                    <View style={styles.links}>
                        <Image source={require('./facebook.png')} style={{ backgroundColor: '#0000', width: 25, height: 25 }} />
                        <Image source={require('./google.png')} style={{ backgroundColor: '#0000', marginLeft: 20, width: 25, height: 25 }} />
                    </View>

                    <Text style={styles.createAcount1}>أليس لديك حساب؟</Text>
                    <Pressable onPress={() => this.props.navigation.navigate('UserCreateScreen')}>
                        <Text style={styles.createAcount}>أنشئ حساب</Text>
                    </Pressable>


                </View>
            </View>

        );

    }
    login() {
        console.log(this.state.email + ' ' + this.state.password)
        auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(response => {
            this.props.navigation.navigate('TabEx')
        }).catch(error => {
            console.log('error', error)
        })
    }
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
export default SignInScreen;