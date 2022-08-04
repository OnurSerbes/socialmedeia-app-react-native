import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TextInput, Pressable} from "react-native";
import CustomButton from "../../components/CustomButton";
useNavigation

function LoginScreen({navigation}){
    
    function goSignup(){
        navigation.navigate('SignupScreen')
    }
    function goMain(){
        navigation.navigate('MainScreenOverview')
    }

    return(
        <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('socialmediapp/assets/logotwo.png')}/>
              <Text style={styles.title}>MYNETWORK</Text>
            </View>
            <View style={styles.generalContainer}>
             <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="E-Mail" keyboardType="email-address"/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
                <View style={styles.buttonContainer}>
                    <CustomButton title="Login" onPress={goMain}/>
                    <CustomButton title="Sign Up" onPress={goSignup}/>
                </View>
                <Text style={styles.signIn}>If you didn't log in before please sign up</Text>  
             </View>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        width: 120,
        height: 120,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    inputContainer:{
        padding: 20,
        alignItems: 'center',
    },
    input:{
        fontSize: 17,
        width: '100%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        borderColor: "black",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    signIn:{
        marginTop: 10,
        fontSize: 15,
    },
    buttonContainer:{
        flexDirection: 'row',
    },
    generalContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        margin: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        elevation: 4,
    }
})

