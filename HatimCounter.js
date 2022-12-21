import {Alert, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import Logo from "./Logo";

export  default function HatimCounter(){
    const [amount, setAmount] = useState('');
    return(
        <View style={styles.container}>
            <Logo/>
            <TextInput
                value={amount}
                onChangeText={(amount) => setAmount(amount)}
                placeholder={'Amount of Person'}
                style={styles.input}
                numeric
                keyboardType={"numeric"}
                returnKeyType="done"
            />
            <Pressable onPress={() => calculateAmount(amount)} style={styles.button}>
                <Text style={styles.text}>Hesapla</Text>
            </Pressable>
        </View>
    );
}



function calculateAmount(amount){
    let x = 100 % amount;
    let y = amount - x;
    let adet1 = Math.trunc(100 / amount);
    let adet2 = adet1 + 1;
    console.log(y + " " + adet1);
    console.log(x + " " + adet2);
    if(amount > 33){
        Alert.alert(
            "Adetler",
            "Herkez 3 okuyacak"
        );
    }else if(amount < 3){
        Alert.alert(
            "Mağlesef",
            "Adetiniz eksik durumda"
        );
    }else{
        Alert.alert(
            "Adetler",
             y + " Kişi " + adet1 + " Adet \nve  \n" + x + " Kişi " + adet2 + " Adet"
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 0,
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
});