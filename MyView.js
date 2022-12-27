import {Button, StyleSheet, Text, View} from "react-native";

export default function MyView({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Choose one Feature you want to use</Text>
            <Button
                title="Find Capital"
                onPress={() => navigation.navigate('Find Capital')}/>
            <Button title="Hatim Counter" onPress={() => navigation.navigate('Hatim Counter')}/>
            <Button title="Countries" onPress={() => navigation.navigate('Countries')} />
            <Button title="Quiz" onPress={() => navigation.navigate('QuizPicker')}/>
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

