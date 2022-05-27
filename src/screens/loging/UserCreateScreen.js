import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export function UserCreateScreen(props){
    
return(
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.textTitle}>إنشاء حساب</Text>
            <Text style={styles.textBody}> مستخدم</Text>
            
        </View>

        <View style={styles.FormView}>
            <Text style={styles.innerText}>اسم المستخدم</Text>
            <TextInput  style={styles.TextInput} placeholder={'اسم المستخدم'} placeholderTextColor={'#8D8D8D'} />
            <Text style={styles.innerText}>كلمة المرور</Text>
            <TextInput style={styles.TextInput} placeholder={'كلمة المرور'} secureTextEntry={true} placeholderTextColor={'#8D8D8D'} />
            

            
            <TouchableOpacity style={styles.Button} >
                <Text style={styles.textButton} onPress={this.signupPressed}>إنشاء حساب</Text>
            </TouchableOpacity>
            <Text style={styles.comment}>أو سجل من خلال</Text>
            <View style={styles.links}>
                <Text style={styles.textLink}>Google</Text>
                <Text style={styles.textLink}>Facebook</Text>
            </View>
            
            
            <Text style={styles.commentQuestion}>أليس لديك حساب؟</Text>
            <Text style={styles.interAcount}> سجل الدخول</Text>

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
    },
    container:{
        display:'flex',
        alignItems:'center',
        width: '100%',
        
    },

    textTitle:{        
        fontSize: 22,
        color:'#262AE1',
        fontWeight: "medium",
        marginTop:140,
        
    },
    textBody:{
        fontSize: 20,
        color:'#FCA602',
        fontWeight: "light",
        Top:27,

    },
    FormView:{
        width:'100%',
        alignItems:'center'

        
    },
    innerText:{    
        fontSize: 16,
        color:'#000000',
        fontWeight: "light",
        marginTop: 23,
        marginLeft:15,
        marginBottom:-15,
        right:150,

        
        
    },
    TextInput: {
        
        width:'90%',
        borderWidth:1,
        borderColor:'#C5C6FF',
        height:43,
        borderRadius:10,
        marginTop: 20,
        textAlign:'right',
        marginRight:20

        
    },
    Button:{
        width:'90%',
        height:52,
        backgroundColor:'#262AE1',
        borderRadius:10,
        marginTop:43,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
    textButton:{
        color:'#FFFFFF',
        fontSize:15,
        fontWeight:'medium'
    },

    comment:{
        marginTop:16,
        color:'#8D8D8D',
        fontSize:12,
        fontWeight:'light',


    },
    commentQuestion:{
        color:'#8D8D8D',
        fontSize:12,
        fontWeight:'light',
        top:35,

    },
    interAcount:{
        color:'#FCA602',
        marginTop:15,
        top:20,
        
    },
    links:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:41,


    },

});