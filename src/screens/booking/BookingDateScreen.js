import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';

export function BookingDateScreen(props){

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
           <Text style={styles.textBody}>توقيت الحجز</Text>
            <View style={styles.checkBox}>
                <Text style={styles.status}>صباحي</Text>
                <Text style={styles.status}>مسائي</Text>
                <Text style={styles.status}>24 ساعة</Text>
            </View>
            <Text style={styles.textBody}> التصنيف</Text>
            <View style={styles.checkBox}>
                <Text style={styles.status}>شباب</Text>
                <Text style={styles.status}>عائلة</Text>
                <Text style={styles.status}>مؤسسة </Text>
            </View>

                <Text style={styles.textBody}> عدد الاشخاص</Text>

        </View>
        <View style={styles.stepProgress}></View>
        <TouchableOpacity style={styles.Button}>  
            
            <Text style={styles.textButton}>التالي </Text>
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
        width:'79%',
        alignItems:'center',
        top:20,
        borderColor:'#C5C6FF',
        borderRadius:10,
        backgroundColor:'#ffffff',

    },
    textBody:{
        fontSize:16,
        fontWeight:'bold',

        width:'100%',
        top:19,
        paddingBottom:0,
        marginBottom:10

    },
    checkBox:{

         width:'80%',
        height:80,
        top:12
    },

    status:{

        paddingTop:7
 
       

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