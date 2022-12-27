import {Pressable, StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";

export default function QuizPicker({navigation}){
    const [selectedValue, setSelectedValue] = useState();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Choose Category
            </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150, justifyContent: "center" }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Arts & Literature" value="arts_and_literature" />
                <Picker.Item label="Film & TV" value="film_and_tv" />
                <Picker.Item label="Food & Drink" value="food_and_drink" />
                <Picker.Item label="General Knowledge" value="general_knowledge" />
                <Picker.Item label="Geography" value="geography" />
                <Picker.Item label="History" value="history" />
                <Picker.Item label="Music" value="music" />
                <Picker.Item label="Science" value="science" />
                <Picker.Item label="Society & Culture" value="society_and_culture" />
                <Picker.Item label="Sport & Leisure" value="sport_and_leisure" />
            </Picker>
            <Pressable title="Submit" onPress={() => navigation.navigate('Quiz', {
                route: `https://the-trivia-api.com/api/questions?categories=${selectedValue}&limit=20`
            })} style={styles.button}>
                <Text style={styles.button_text}>Submit</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text: {
        alignItems: "flex-start",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        margin: 10,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkgreen',
        padding: 10,
        margin: 10
    },
    button_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});