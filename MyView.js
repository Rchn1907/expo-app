import {Button, StyleSheet, Text, View} from "react-native";

export default function MyView({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button
                title="Click Me"
                onPress={() => navigation.navigate('Detail')}/>
            <Button title="Hatim Counter" onPress={() => navigation.navigate('Hatim Counter')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

