import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,StatusBar,SafeAreaView,TouchableOpacity,TextInput} from 'react-native';



const DetailsScreen = ({ navigation }) => {

return(
    <SafeAreaView>
        <ScrollView nestedScrollEnabled ={true}>
            <View style={styles.mainContainer}>
                <StatusBar/>
                <View style={styles.slides}>
                    <Image style={styles.chalet} source= {require('../assets/chalet.png')}/>
                </View>

                <View  style={styles.chaletView}>
                        <View style={styles.details}>
                            <Text style={styles.text}>شاليه عليين</Text>
                            <Text style={styles.comment}> الليلة/</Text>
                            <Text style={styles.price}>450 ₪</Text>
                        </View>
                        <View  style={styles.details}>
                            <Text style={styles.location}>غزة، الزيتون </Text>
                            <Text style={styles.rating}>4.6</Text>
                            <Image style={styles.star} source= {require('../assets/star.png')}/>
                        </View>

                </View>

                <View style={styles.description}>
                    <Text style={styles.text}>الوصف</Text>
                    <Text style={styles.textDetails}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
                        المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل
                        توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                        إيبسوم لأنها تعطي توزيعاَ طبيعياَ للأحرف هنا يوجد محتوى نصي.</Text>
                </View>

                <Text style={styles.textSection}>تفاصيل</Text>
                <View style={styles.detail}>
                    
                    <View style={styles.detailsOfChalet}>
                        <Image style={styles.icon} source= {require('../assets/scale.png')}/>
                        <Text style={styles.text1}>مساحة الشاليه</Text>
                        <Text style={styles.textDetails1}>200 km</Text>
                    </View>
                    <View style={styles.detailsOfChalet}>
                        <Image style={styles.icon} source= {require('../assets/pool1.png')}/>
                        <Text style={styles.text1}>عمق المسبح</Text>
                        <Text style={styles.textDetails1}>200 km</Text>
                    </View>
                    <View style={styles.detailsOfChalet}>
                        <Image style={styles.icon} source= {require('../assets/interior-design.png')}/>
                        <Text style={styles.text1}> عدد الغرف</Text>
                        <Text style={styles.textDetails1}> 5</Text>
                    </View>
                        
                </View>

                <Text style={styles.textSection}>الخدمات</Text>
                <View  style={{marginTop:20,marginLeft:25,marginBottom:1}}>
                    <ScrollView horizontal={true} >
                        <View style={styles.services}>
                            <Image source= {require('../assets/Wi-Fi.png')}/>
                            <Text style={styles.game}>Wifi</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Lap-Pool.png')}/>
                            <Text style={styles.game}>مسبح</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Kids-Pool.png')}/>
                            <Text style={styles.game}>مسبح أطفال</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Stadium.png')}/>
                            <Text style={styles.game}>ملعب كرة قدم</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Volleyball.png')}/>
                            <Text style={styles.game}>ملعب كرة طائرة</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Tennis-Racquet.png')}/>
                            <Text style={styles.game}>طاولة تنس</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Sun-Lounger.png')}/>
                            <Text style={styles.game}>جلسة خارجية</Text>
                        </View>
                        <View style={styles.services}>
                            <Image source= {require('../assets/Weber.png')}/>
                            <Text style={styles.game}>مكان شوي</Text>
                        </View>
                    </ScrollView>

                </View>
            <View></View>
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.textSection}>الموقع</Text>
                <Image style={styles.locationImage} source= {require('../assets/GroupLocation.png')}/>

                <View style={styles.ratingSection}>
                    <Text style={styles.textSection}>التقييم</Text>
                    <View style={{flexDirection:'row',alignItems:'center',top:10,right:230}}>
                        <Image style={{width:15,height:15 }} source= {require('../assets/star.png')}/>
                        <Text style={{color:'#262AE1',fontSize:16,marginLeft:5}}>4.6</Text>
                    </View>
                </View>
                <Image style={styles.stars} source= {require('../assets/stars.png')}/>

                    <View style={{borderTopWidth:1 ,marginTop:20, borderTopColor:'#E5E5E5'}}>  
                        <View style={styles.personRating}>
                            <View style={{flexDirection:'row'}}>
                            <Image  source= {require('../assets/Group154.png')}/>
                                <View style={{marginLeft:15}}>
                                    <Text style={{fontSize:16, marginBottom:2,marginTop:-2,color:'#000000'}}>سارة محمد</Text>
                                    <Text style={{fontSize:12,color:'#666666',marginTop:-2}}>3 Dec 2023</Text>
                                </View>
                            </View>
                            <Text style={{marginTop:12}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
                                عن التركيز على الشكل الخارجي.</Text>
                        </View>
                    </View>
                    
                    <View style={styles.personRating}>
                        <View style={{flexDirection:'row'}}>
                            <Image  source= {require('../assets/Group154.png')}/>
                                <View style={{marginLeft:15}}>
                                    <Text style={{fontSize:16, marginBottom:2,marginTop:-2,color:'#000000'}}> اية الزعبوط</Text>
                                    <Text style={{fontSize:12,color:'#666666',marginTop:-2}}>3 Dec 2023</Text>
                                </View>
                        </View>
                        <Text style={{marginTop:12}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
                            عن التركيز على الشكل الخارجي.</Text>
                    </View>
                    
                    <TextInput style={styles.TextInput}placeholder='ما هو رأيك؟'placeholderTextColor={'#8D8D8D'}/>
                    

            </View>

            

    
        </ScrollView>

        <View style={styles.main} >

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.Button}>  
                    <Text style={styles.textButton}>احجز الآن </Text>
                </TouchableOpacity>
                <View style={styles.Button2}>
                    <Text style={styles.textButton2}> 450 ₪ </Text>
                </View>
            </View>
        </View>

    </SafeAreaView>
    

    
    );
}


const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        width:'100%',
        
    },
    slides:{
        display:'flex',
        alignItems:'space-between',
        width: '90%',
        height:300,
        justifyContent:'center',
        flexDirection:'row',
        
    },
    chalet:{
        width: '100%',
        height:300,
        borderRadius:10,
        top:20
        

    },
    chaletView:{

        width:'90%',
        display:'flex',
        alignItems:'center',
        marginTop:60,
        padding:8,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        borderBottomWidth:0.2,
        borderTopColor:'#E5E5E5'
    
    },

    details:{
        flexDirection:'row',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        bottom:35
    },
    description:{
        width:'90%',
        display:'flex',
        padding:10

    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#666666',

    },
    textDetails:{
        paddingTop:10,
        fontSize:14,
        fontWeight:'light',
        

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
    detail:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'space-between',

    },
    detailsOfChalet:{
        
        width:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10,
        backgroundColor:'#FFFFFF',
        
    },
    textSection:{
        fontSize:20,
        fontWeight:'bold',
        color:'#666666',
        width:'85%',
        marginTop:20
        
    },
    text1:{
        fontSize:14,
        color:'#000000',
        top:5


    },

    textDetails1:{
    color:'#666666',
    fontSize:12,

    },
    services:{
        padding:10,
        width:70,
        height:65,
        backgroundColor:'#F6F6F6',
        marginLeft:10,
        display:'flex',
        alignItems:'center',
        borderRadius:10,
    },
    game:{
        color:'#000000',
        fontSize:9,
        width:65,
        textAlign:'center'
    
    },
    locationImage:{
        marginTop:12,
        width:'85%',
        marginBottom:12,
        borderRadius:10
    },

    ratingSection:{
        flexDirection:'row',
        display:'flex',
        alignItems:'center',
        width:'85%',
        paddingBottom:35,
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5'
        
    },
    stars:{
        marginTop:20,
    },
    personRating:{
        width:'85%',
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        padding:20,
        marginTop:20
    },
    TextInput: {
        width:'85%',
        borderWidth:0,
        borderRadius:10,
        backgroundColor:'#F2F2F2',
        marginTop: 21,
        paddingLeft:20,  
        marginBottom:90,

    },
    buttons:{
        flexDirection:'row',
        width:'85%',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30
    },

    Button:{
        width:220,
        height:52,
        backgroundColor:'#262AE1',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        

    },
    textButton:{
        color:'#FFFFFF',
        fontSize:15,
        
    },
    Button2:{
        backgroundColor:'#F6F6F6',
        width:120,
        height:52,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',

        

    },
    textButton2:{
        color:'#FCA602',
        fontSize:15,

    },
    main:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        width:'100%',
        bottom:40,
        paddingBottom:10,
        
    
    }

});

export default DetailsScreen;