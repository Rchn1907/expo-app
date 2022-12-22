import {Alert, ScrollView, StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function CountryDetail({route}){
    const[flag, setFlag] = useState();
    try{
        fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },body: JSON.stringify({
                    "iso2" : route.params.data.iso2
                })
        }).then(response => response.json())
            .then(json => {
                setFlag(json.data.unicodeFlag);
                return json.data;
            })
    } catch(error){
        Alert.alert(
            "Error",
            "An Error occured"
        );
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.country}>Name: {route.params.data.country}   {flag}</Text>
                <Text style={styles.details}><Text style={styles.country}>iso2:</Text> {route.params.data.iso2}</Text>
                <Text style={styles.details}><Text style={styles.country}>iso3:</Text> {route.params.data.iso3}</Text>
                <Text style={styles.country}>Cities: </Text>
                {route.params.data.cities.map((city) => {
                    return (
                        <View>
                            <Text style={styles.details}>   {city}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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