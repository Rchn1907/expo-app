import React from 'react';
import {View, Text, StyleSheet} from 'react-native';




function Detail() {
    return (
       <View style={styles.container}>
           <Text>Congratulations!</Text>
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

export default Detail;