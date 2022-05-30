import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';




const FavoriteScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#F5F5F5', alignItems: 'center', width: '100%', }}>
                <View style={styles.container}>
                    <Image style={styles.imgHead1} source={require('../assets/return.png')} />
                    <Text style={styles.textTitle}>  المفضلة </Text>
                </View>
            </View>
            <ScrollView >

                <View style={styles.mainContainer}>
                    <StatusBar />
                    <View style={{ flexDirection: 'row', width: '83%', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                        <Pressable onPress={() => navigation.navigate('DetailsScreen')}>
                            <View style={styles.chaletView}>
                                <View style={styles.chaletImage}>
                                    <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                    <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                                </View>
                                <View style={styles.data}>
                                    <Text style={styles.text}>شاليه عليين</Text>
                                    <Text style={styles.location}>غزة، الزيتون</Text>
                                    <View style={styles.dataDetails}>
                                        <Text style={styles.rating} >4.6</Text>
                                        <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                        <Text style={styles.comment}> الليلة/</Text>
                                        <Text style={styles.price}>450 ₪</Text>
                                    </View>

                                </View>

                            </View>
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', width: '83%', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '83%', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', width: '83%', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                        <View style={styles.chaletView}>
                            <View style={styles.chaletImage}>
                                <Image style={styles.img} source={require('../assets/chaletView.png')} />
                                <Image style={styles.imgHeart} source={require('../assets/DarkHeart.png')} />
                            </View>
                            <View style={styles.data}>
                                <Text style={styles.text}>شاليه عليين</Text>
                                <Text style={styles.location}>غزة، الزيتون</Text>
                                <View style={styles.dataDetails}>
                                    <Text style={styles.rating} >4.6</Text>
                                    <Image style={{ right: 3 }} source={require('../assets/star.png')} />
                                    <Text style={styles.comment}> الليلة/</Text>
                                    <Text style={styles.price}>450 ₪</Text>
                                </View>

                            </View>

                        </View>
                    </View>







                </View>

            </ScrollView>
            <View><Text>Area</Text></View>

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        width: '100%',


    },
    container: {
        display: 'flex',
        alignItems: 'space-between',
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        top: 1,
        paddingBottom: 30

    },
    imgHead1: {
        right: 123,
        bottom: 5
    },
    textTitle: {
        fontSize: 22,
        color: '#000000',
        right: 10
    },
    chaletView: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        height: 220,
        marginBottom: 20

    },

    img: {
        height: 105,
        width: 130.17,
        borderRadius: 10
    },
    imgHeart: {
        bottom: 29,
        left: 90

    },
    data: {
        bottom: 40
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#666666',

    },
    location: {
        color: '#666666',
        top: 3,
        fontSize: 12
    },
    dataDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 13,


    },
    price: {
        color: '#FCA602',
        fontSize: 14,
        left: 1
    },
    comment: {
        fontSize: 10,
        fontWeight: 'light',
        color: '#666666',
        left: 10,
        top: 1
    },
    rating: {
        color: '#262AE1',
        fontSize: 14,
        left: 3,
        top: 1

    },








});
export default FavoriteScreen;