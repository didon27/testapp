import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
}

export default Loader;