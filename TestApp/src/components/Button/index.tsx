import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

type IButton = {
    text: string,
    textStyle?: object,
    style?: object
    onPress: () => void
}

const Button: FC<IButton> = ({ text, textStyle, style, onPress }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...style }}
            onPress={onPress}
        >
            <Text style={{ ...styles.text, ...textStyle }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;