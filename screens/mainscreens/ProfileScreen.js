import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native"
import ProfileContainer from "../../components/ProfileContainer"

function ProfileScreen(){
    return (
        <View>
            <ProfileContainer name="User Name" bio="Enter your biography here" image={require('socialmediapp/assets/usericon.png')}/>
            <FlatList/>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({

})