import {Alert, Button, Pressable, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export default function Quiz({route}){
    const [data, setData] = useState([JSON]);
    let [question, setQuestion] = useState("");
    let [index, setIndex] = useState(0);
    let [answers, setAnswers] = useState([]);
    let [color, setColor] = useState("grey");
    let [isDisabled, setIsDisabled] = useState(false);
    let [corects, setCorrects] = useState(0);


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
                    setAnswers(answers => [...answers, json[index].correctAnswer]);
                })
        } catch(error){
            Alert.alert(
                "Error",
                "Something went wrong"
            );
        }
    }, []);

    function update(answer){
        if(color === "grey"){
            if(answer === data[index === 0 ? 0 : index-1].correctAnswer){
                setColor("green");
                setCorrects(corects+1);
            }else {
                setColor("red");
            }
        }else{
            setColor("grey");
        }
        setIsDisabled(true);
    }

    function nextQuestion(){
        setQuestion(data[index].question);
        setAnswers(data[index].incorrectAnswers);
        setAnswers(answers => [...answers, data[index].correctAnswer]);
        setColor("grey");
        setIndex(index+1);
        setIsDisabled(false);
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
            backgroundColor: color,
        },
        nextButton: {
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingVertical: 12,
            paddingHorizontal: 32,
            padding: 20,
            margin: 20,
            borderRadius: 1,
            backgroundColor: 'white',
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

    return(
        <View>
            <Text>{corects}/20</Text>
            <View style={styles.question1}>
                <Text style={styles.question}>{question}</Text>
            </View>
            <View style={styles.container}>
                <Pressable onPress={() => {update(answers[0]);}} style={styles.button} disabled={isDisabled}>
                    <Text style={styles.text}>{answers[0]}</Text>
                </Pressable>
                <Pressable onPress={() => {update(answers[1]);}} style={styles.button} disabled={isDisabled}>
                    <Text style={styles.text}>{answers[1]}</Text>
                </Pressable>
                <Pressable onPress={() => {update(answers[2]);}} style={styles.button} disabled={isDisabled}>
                    <Text style={styles.text}>{answers[2]}</Text>
                </Pressable>
                <Pressable onPress={() => {update(answers[3]);}} style={styles.button} disabled={isDisabled}>
                    <Text style={styles.text}>{answers[3]}</Text>
                </Pressable>
            </View>
                <Button title="Next Question" onPress={() => {nextQuestion();}} disabled={!isDisabled}/>
        </View>
    );
}
