import {Image, StyleSheet, View} from "react-native";

export default function Logo(){
    return(
        <View>
            <Image style={styles.image} source={require("./assets/logo.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        justifyContent: 'space-around'
    }
});