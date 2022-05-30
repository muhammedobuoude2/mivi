import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';

const search1 = [
    { name: 'شاليه عليين' },
    { name: 'شاليه عليين' },
    { name: 'شاليه عليين' },
    { name: 'شاليه عليين' },
    { name: 'شاليه عليين' },
    { name: 'شاليه عليين' },
];

export function SearchScreen(props) {
    const [input, setInput] = React.useState("");
    return (
        <ScrollView>

            <View style={styles.mainContainer}>
                <StatusBar />
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Image style={styles.imgHead1} source={require('../assets/return.png')} />
                        <Text style={styles.textTitle}> بحث </Text>
                    </View>
                    <TextInput style={styles.TextInput} placeholder={' بحث...   '} placeholderTextColor={'#8D8D8D'}
                        onChangeText={(text) => setInput(text)}

                    />
                </View>
                <Text style={styles.superText}>مؤخراً</Text>
            </View>

            {search1.map((search, index) => {
                const { name } = search;

                return (
                    <View style={styles.mainContainer}>
                        <StatusBar />
                        <View key={index.toString()} style={styles.searchView}>
                            <View style={styles.nameOfChalet}>
                                <Text style={styles.text}>{name}</Text>
                                <Image style={styles.star} source={require('../assets/cancel.png')} />

                            </View>

                        </View>

                    </View>

                );

            })}


        </ScrollView>

    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0000',
        flexDirection: 'column',
        alignItems: 'center',
        top: -40
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-between',
        width: '100%',

    },
    imgHead1: {
        left: 10,
        bottom: 5
    },
    textTitle: {
        fontSize: 22,
        color: '#000000',
        marginTop: 60,
        left: 129, fontFamily: 'GESSTwoBold',


    },
    TextInput: {
        width: '95%',
        borderWidth: 0,
        backgroundColor: '#F5F5F5',
        borderRadius: 4,
        borderColor: '#A8A8A8',
        marginTop: 20,
        paddingLeft: 40, fontFamily: 'GESSTwoBold',


    },
    text:{
        fontFamily: 'GESSTwoBold',

    },
    superText: {

        width: '85%',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 8,
        fontFamily: 'GESSTwoBold',

    },
    nameOfChalet: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 345,
        fontFamily: 'GESSTwoBold',

    }





});