import {Alert, Button, Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export default function Quiz({route}){
    const [data, setData] = useState([JSON]);
    let [question, setQuestion] = useState("");
    let [index, setIndex] = useState(0);
    let [answers, setAnswers] = useState([]);
    useEffect(() => {
        try{
            console.log(route.params.route);
            fetch(route.params.route, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
                .then(json => {
                    setData(json);
                    setQuestion(json[index].question);
                    setAnswers(json[index].incorrectAnswers);
                    setAnswers(answers => [...answers, json[index].correctAnswer])
                })
        } catch(error){
            Alert.alert(
                "Error",
                "Something went wrong"
            );
        }
    }, []);

    function update(){
        setIndex(index+1);
        setQuestion(data[index].question);
        setAnswers(data[index].incorrectAnswers);
        setAnswers(answers => [...answers, data[index].correctAnswer]);
    }

    return(
        <View>
            <View style={styles.question1}>
                <Text style={styles.question}>{question}</Text>
            </View>
            <View style={styles.container}>
                <Pressable onPress={() => {update();}} style={styles.button}>
                    <Text style={styles.text}>{answers[0]}</Text>
                </Pressable>
                <Pressable onPress={() => {update();}} style={styles.button}>
                    <Text style={styles.text}>{answers[1]}</Text>
                </Pressable>
                <Pressable onPress={() => {update();}} style={styles.button}>
                    <Text style={styles.text}>{answers[2]}</Text>
                </Pressable>
                <Pressable onPress={() => {update();}} style={styles.button}>
                    <Text style={styles.text}>{answers[3]}</Text>
                </Pressable>
            </View>
            <Button title="Test" onPress={() =>console.log(index)}> Button </Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        padding: 20,
        margin: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkgreen',
    },
    question1:{
      alignItems: "center",
      justifyContent: "flex-start",
        padding: 20,
        margin: 20,
        backgroundColor: "#ffffff"
    },
    question: {
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "#000000",
        alignItems: "center",
    },
    country: {
        fontSize: 20,
        padding: 10,
        margin: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    details: {
        fontSize: 16,
        padding: 10,
        margin: 10,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    }
});
