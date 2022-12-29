import React, { FC } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type IInfoBlock = {
    text: string
    value: string | undefined
}

const InfoBlock: FC<IInfoBlock> = ({ text, value }: any) => {
    return (
        <View style={styles.infoBlock}>
            <Text style={styles.label}>{text}: </Text>
            <Text style={{ flex: 1 }}>{value}</Text>
        </View>
    )
}

export default InfoBlock;