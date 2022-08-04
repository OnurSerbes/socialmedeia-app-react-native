import { View, Text, StyleSheet, Pressable} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function CustomButton({title, onPress}){
    return(
        <LinearGradient style={styles.button} start={{x: 1.0, y: 1.0}} end={{x: 0.2, y: 0.0}} colors={['#0357FF','#50C5FF', '#A8F9FF']}>
            <Pressable onPress={onPress}>
                <View>
                    <Text style={styles.insideButtonText}>{title}</Text>
                </View>
            </Pressable>
        </LinearGradient>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        width: 100,
        height: 40,
        margin: 10,
        backgroundColor: '#04C6E2',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    insideButtonText:{
        fontSize: 17,
        fontWeight: 'bold',
    },
})