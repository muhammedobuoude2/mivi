import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';

const BookingScreen = ({ navigation }) => {

return(
  
    <View style={styles.mainContainer}>
        <StatusBar/>
        <View style={styles.container}>
            <View style={styles.head}>
            <Image style={styles.imgHead1} source= {require('../../assets/return.png')}/>
            <Text style={styles.textTitle}> الحجز </Text>
            
            </View>
            <View style={styles.stepProgress}></View>
                    
            </View>

        <View style={styles.FormView}>
            <View style={styles.checkBox}>
                <Text style={styles.status}>شباب</Text>
                <Text style={styles.choice} >نايت هاوس</Text>
            </View>
        </View>
        <View style={styles.FormView}>
            <View style={styles.checkBox}>
                <Text style={styles.status}>التكلفة</Text>
                <Text style={styles.choice} >400 ₪ </Text>
            </View>
        </View>
        <View style={styles.FormView}>
            <View style={styles.checkBox}>
                <Text style={styles.status}>التاريخ</Text>
                <Text style={styles.choice} >24 - 07 - 2022 </Text>
            </View>
        </View>
        <View style={styles.FormView}>
            <View style={styles.checkBox}>
                <Text style={styles.status}>الفترة</Text>
                <Text style={styles.choice} >مسائي 08:00 م   -  07:00 ص </Text>
            </View>
        </View>
        <View style={styles.FormView}>
            <View style={styles.checkBox}>
                <Text style={styles.status}>التصنيف</Text>
                <Text style={styles.choice} >عائلة </Text>
            </View>
        </View>

        <TouchableOpacity style={styles.Button}>  
            
            <Text style={styles.textButton}>تأكيد </Text>
        </TouchableOpacity>
    </View>

);
}
const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        alignItems: 'center',
    },
    container:{
        display:'flex',
        alignItems:'center',
        width: '100%',
        
        
        
    },
    head:{
        display:'flex',
        flexDirection:'row',
        alignItems:'space-between',
        width:'100%',

    },
    imgHead1:{
        left:30
    },


    textTitle:{        
        fontSize: 22,
        color:'#000000',
        fontWeight: "medium",
        marginTop:80,
        left:150,

    },

    stepProgress:{
        backgroundColor:'#333',
        width:'80%',
        height:80,
        marginTop:33
    },
    FormView:{
        width:'80%',
        alignItems:'flex-start',
        top:20,
        height:45,
        borderColor:'#C5C6FF',
        borderRadius:10,
        backgroundColor:'#ffffff',

    },

    checkBox:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        top:12,
        backgroundColor:'#3333'
    },

    status:{
        fontWeight:'bold',
        fontSize: 16,
    },
    choice:{
        color:'#262AE1',
        backgroundColor:'#D8D9FF',
        height:30,
        borderRadius:4,
        width:'100',
        textAlign:'center',
        paddingTop:5,
        fontWeight:'medium',


    },
    Button:{
        width:'80%',
        height:43,
        backgroundColor:'#262AE1',
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        top:50,
        

    },
    textButton:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'medium',
        top:10,
        
        
    },




});

export default BookingScreen;