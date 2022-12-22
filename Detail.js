import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, TextInput, Pressable} from 'react-native';

let test = "";

function Detail() {
    const [input, setInput] = useState('');
    const [capital, setCapital] = useState('');
    return (
       <View style={styles.container}>
           <Text style={styles.capital}>
               {capital}
           </Text>
           <TextInput
               value={input}
               onChangeText={(country) => setInput(country)}
               placeholder={'Search for Country'}
               style={styles.input}
               returnKeyType="done"
           />
           <Pressable onPress={() => {searchCapital(input).then(()  => setCapital(`${test}`));}} style={styles.button}>
               <Text style={styles.text}>Search</Text>
           </Pressable>
       </View>
    );
}

async function searchCapital(incountry) {
    try{
        await fetch('https://countriesnow.space/api/v0.1/countries/capital', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "country": incountry
            })
        }).then(response => response.json())
            .then(json => {
                console.log(json.data["capital"]);
                test = json.data["capital"];
                return json.data["capital"];
            })
    } catch(error){
        Alert.alert(
            "Error",
            "Country wrong written or no Country"
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'darkgreen',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    capital: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});

export default Detail;