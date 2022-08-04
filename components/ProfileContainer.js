import { View, Text, Pressable, Image, StyleSheet } from "react-native"

function ProfileContainer({name, bio, image}){

    return (
        <View style={styles.infoContainer}>
               <View>
                   <Image style={styles.image} source={image}/>
               </View>
               <View style={styles.textContainer}>
                   <Text style={styles.userName}>{name}</Text>
                   <Text style={styles.biography}>{bio}</Text>
               </View>
        </View>
    )
}

export default ProfileContainer

const styles = StyleSheet.create({
    infoContainer:{
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white'
        
    },
    textContainer:{
        margin: 15,
        flexDirection: 'column'
    },
    image:{
        width: 130,
        height: 130,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 100,
    },
    userName:{
        fontSize: 28,
        fontWeight: '400'
    },
    biography:{
        fontSize: 16,
    },
})