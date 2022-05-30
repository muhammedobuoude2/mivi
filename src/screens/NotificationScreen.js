import React,{useState} from 'react';
import { View, Text, StyleSheet, Switch, Image, Pressable } from 'react-native';



const NotificationScreen = ({ navigation }) => {
    const [switchValue1, setSwitchValue1] = useState(false);
    const [switchValue2, setSwitchValue2] = useState(false);
    const [switchValue3, setSwitchValue3] = useState(false);
    const [switchValue4, setSwitchValue4] = useState(false);
    const [switchValue5, setSwitchValue5] = useState(false);

    const toggleSwitch1 = (value) => {
    setSwitchValue1(value);
    };
    const toggleSwitch2 = (value) => {
    setSwitchValue2(value);
    };
    const toggleSwitch3 = (value) => {
    setSwitchValue3(value);
    };
    const toggleSwitch4 = (value) => {
    setSwitchValue4(value);
    };
    const toggleSwitch5 = (value) => {
    setSwitchValue5(value);
    };

return(
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.textTitle}>الاشعارات </Text>
            <Pressable style={{ width: 25, height: 20, left: 15, paddingHorizontal: 10, alignItems: 'flex-start' }} onPress={() => navigation.navigate('TabEx')}>
                <Image style={styles.img} source={require('../assets/return.png')} />
            </Pressable>
        </View>
        <View style={styles.FormView}>    
            <View style={styles.Form1}>
                <Text style={styles.innerText}>اشعارات عامة </Text>
                <Text style={styles.innerText}>الصوت </Text>
                <Text style={styles.innerText}>الاهتزاز </Text>
                <Text style={styles.innerText}>تحديثات التطبيق </Text>
                <Text style={styles.innerText}>توفر خدمة جديدة </Text>
            </View>
            <View style={styles.Form2}>
                <Switch
                    style={styles.switch}
                    onValueChange={toggleSwitch1}
                    value={switchValue1}
                    trackColor={{false:'#E5E5E5' , true:'#5856D6'}}
                    thumbColor={'#5856D6'}
                    />
                <Switch
                    style={styles.switch}
                    onValueChange={toggleSwitch2}
                    value={switchValue2}
                    trackColor={{false:'#E5E5E5', true:'#5856D6'}}
                    thumbColor={'#5856D6'}
                    />
                <Switch
                    style={styles.switch}
                    onValueChange={toggleSwitch3}
                    value={switchValue3}
                    trackColor={{false:'#E5E5E5', true:'#5856D6'}}
                    thumbColor={'#5856D6'}
                    />  
                <Switch
                    style={styles.switch}
                    onValueChange={toggleSwitch4}
                    value={switchValue4}
                    trackColor={{false:'#E5E5E5', true:'#5856D6'}}
                    thumbColor={'#5856D6'}
                    />
                <Switch
                    style={styles.switch}
                    onValueChange={toggleSwitch5}
                    value={switchValue5}
                    trackColor={{false:'#E5E5E5', true:'#5856D6'}}
                    thumbColor={'#5856D6'}
                    
                    />          

            </View>
        </View>
    </View>

);
}
const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#0000',
        flexDirection:'column',
        alignItems: 'center',
        top:-50
    },
    container:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        alignItems:'space-between',
        bottom:60
    },
        img:{
        right:230,
            top: -140

    },

    textTitle:{        
        fontSize: 22,
        color:'#000000',
        fontWeight: "medium",
        top:-140
    },
    FormView:{
        display:'flex',
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:260,
        top: -140


    },


    switch:{
        marginTop:15,
        marginBottom:15,
    },

    innerText:{  
        fontSize: 16,
        color:'#000000',
        fontWeight: "light",
        marginTop: 20,
        marginLeft:15,
        marginBottom:15,
        
        
    },
});
export default NotificationScreen;