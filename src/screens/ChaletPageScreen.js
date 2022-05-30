import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,StatusBar} from 'react-native';


const chalets =[
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
    {name:'شاليه عليين' ,price :'450 ₪',time:'الليلة/',rating:'4.6', location:'بيت لاهيا' },
];



const ChaletPageScreen = ({ navigation }) => {

return(

    <ScrollView>
    <View  style={styles.mainContainer}>
        <View style={styles.container}>
            <Image style={styles.imgHead1} source= {require('../assets/return.png')}/>
            <Text style={styles.textTitle}> غزة </Text>
            <Image style={styles.imgHead2} source= {require('../assets/showList.png')}/>

        </View>
    </View>
        
        {chalets.map((chalet,index) => {
            const {name,price,time,rating,location}=chalet;
        
            return(

            <View style={styles.mainContainer}>
                <StatusBar/>

                <View key={index.toString()} style={styles.chaletView}>
                    <Image style={styles.img} source= {require('../assets/chaletView.png')}/>
                    <Image style={styles.heart} source= {require('../assets/heart.png')}/>
                    <View style={styles.details}>
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.comment}> {time}</Text>
                        <Text style={styles.price}> {price}</Text>
                    </View>
                    <View  style={styles.details}>
                        <Text style={styles.location}> {location} </Text>
                        <Text style={styles.rating}>{rating}</Text>
                        <Image style={styles.star} source= {require('../assets/star.png')}/>
                    </View>
                    
                </View>

            </View>
            
            );
                
        })}
    
    </ScrollView>

);
}


const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#F5F5F5',
        alignItems: 'center',
        
    },
    container:{
        display:'flex',
        alignItems:'space-between',
        width: '90%',
        justifyContent:'center',
        flexDirection:'row',
        paddingTop:40,
        paddingBottom:30
        
    },
    imgHead1:{
       right:120,
        bottom:5
    },
       imgHead2:{
        bottom:5,
        left:10
    },
    textTitle:{        
        fontSize: 22,
        color:'#000000',
        fontWeight: "medium", 
    },
    chaletView:{

        width:'90%',
        display:'flex',
        alignItems:'center',
        marginTop:20,
        padding:20,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        height:255,
       
    
    },
    img:{
        borderRadius:10,
        width:'100%',
        
    },
    heart:{
        left:152,
        bottom:40
    },
    details:{
        flexDirection:'row',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        bottom:45
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    },
    comment:{
        fontSize:12,
        fontWeight:'light',
        color:'#666666',
        left:80,
        top:1 
    },
    price:{
        color:'#262AE1',
        fontSize:16,
    },

    location:{
        color:'#666666',
        top:10,
        left:5
    },
    rating:{
        color:'#262AE1',
        fontSize:14,
        left:125,
        top:1 
        
    },





});
export default ChaletPageScreen;