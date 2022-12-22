import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";

const Countries = props => {
    const[countries, setCountries] = useState([]);
    useEffect(() => {
        try{
            fetch('https://countriesnow.space/api/v0.1/countries', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json())
                .then(json => {
                    setCountries(json.data);
                    return json.data;
                })
        } catch(error){
            Alert.alert(
                "Error",
                "An Error occured"
            );
        }
    }, []);
    return(
        <View style={styles.container}>
            <FlatList
                data={countries}
                keyExtractor={(_,i) => i.toString()}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={() =>
                            props.navigation.navigate('CountryDetail', {
                                data: item
                            })
                        }>
                            <Text style={styles.capital}>
                                {item.country}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
 export default Countries;


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
        fontSize: 16,
        padding: 10,
        margin: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});