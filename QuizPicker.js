import {Pressable, StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useState} from "react";
import RNPickerSelect from 'react-native-picker-select';

export default function QuizPicker({navigation}){
    const [selectedValue, setSelectedValue] = useState();
    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 18,
            paddingVertical: 10,
            paddingHorizontal: 0,
            borderWidth: 0,
            borderBottomWidth: 0.8,
            borderBottomColor: selectedValue ? 'green' : 'red',
            color: 'black',
            padding: 30,
            margin: 50,
        },
        inputAndroid: {
            fontSize: 18,
            paddingVertical: 8, // with vertical padding, chevron disappears
            paddingHorizontal: 0,
            borderWidth: 0,
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
            color: 'black',
            padding: 30,
            margin: 50
        },
    });
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Choose Category
            </Text>
            <RNPickerSelect
                selectedValue={selectedValue}
                placeholder={{ label: "Select your Category", value: null }}
                style={pickerSelectStyles}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                items={[
                    { label: "Arts & Literature", value: "arts_and_literature"},
                    { label: "Film & TV", value: "film_and_tv"},
                    { label: "Food & Drink", value: "food_and_drink"},
                    { label: "General Knowledge", value: "general_knowledge"},
                    { label: "Geography", value: "geography"},
                    { label: "History", value: "history"},
                    { label: "Music", value: "music"},
                    { label: "Science", value: "science"},
                    { label: "Society & Culture", value: "society_and_culture"},
                    { label: "Sport & Leisure", value: "sport_and_leisure"},
                ]}
            />
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
        fontSize: 36,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginTop: 50,
        marginBottom: 50,
        paddingTop: 50,
    },
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'grey',
        padding: 10,
        marginTop: 10
    },
    button_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

