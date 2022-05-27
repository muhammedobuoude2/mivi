import React, { useState, useRef } from 'react';
import { Text, View, FlatList, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import data1 from '../consts/data1';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);




const renderItem = ({ item }) => {
  return (
    <View
      style={{
        borderWidth: 0.3,
        marginVertical: 5,
        borderRadius: 20,
        padding: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        width: 315,
        height: 115,

      }}><View><Text style={{ marginHorizontal: 90, fontSize: 18, fontWeight: 'bold', marginRight: -10 }}>
        {item.name}
      </Text>
        <Text style={{ marginHorizontal: 50, fontSize: 14, fontWeight: 'bold', marginRight: -30,marginTop:-20 }}>
          {item.prise}
        </Text>
        <Text style={{ marginHorizontal: 75, fontSize: 14, fontWeight: 'bold', marginLeft:95 }}>
          {item.address}
        </Text>
        <Image source={require('../assets/VectorStart.png')}  style={{
          width: 15, height: 15, marginHorizontal: 100, marginRight: 20 , marginVertical:20
        }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 100, marginVertical: -40, marginHorizontal: 80,}}>
          {item.start}
        </Text>
        
        </View>
      <Image source={{ uri: item.url }} style={{
        width: 115, height: 100, marginEnd: 180, borderRadius: 20, borderWidth: 1, marginVertical: -42
      }} />

    </View>
  );
};

const oneShili = ({ item }) => {
  return (
    <Text style={{ backgroundColor: 'black', marginVertical: 10, fontSize: 10, fontWeight: 'bold' }}>
      {item.name}  {item.prise}
    </Text>,
    <Image source={{ uri: item.url }} style={{
      backgroundColor: 'red', paddingTop: 50, padding: 20, marginTop: 20,
      width: 200, height: 50, borderRadius: 20, paddingLeft: 20, alignItems: 'center'
    }} />
  )

}
const DetailsScreen = () => {
  return (

    <SafeAreaView style={{ alignItems: 'center' , height:400,width:400 , marginVertical:30}}>
      <FlatList data={data1}
        renderItem={renderItem}
      />

    </SafeAreaView>
  )


};

export default DetailsScreen;
