import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function SearchScreen() {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>إنشاء searchScreen</Text>
                <Text style={styles.textBody}> searchScreen</Text>

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
})
