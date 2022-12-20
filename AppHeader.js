import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class MyComponent extends React.Component {
    render() {
        return (
            <Appbar style={styles.bottom}>
                <Appbar.Content title="区域" />
                <Appbar.Content title="场景" />
                <Appbar.Content title="智能" />
                <Appbar.Action icon="search" onPress={() => console.log('Pressed archive')} />
            </Appbar>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});
