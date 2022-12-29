import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { InfoBlock } from '~/components';
import { RouteNames } from '~/navigation/routeNames';
import { ITransactionItemProps } from '~/screens/types';

import styles from './styles';

const TransactionItem: FC<ITransactionItemProps> = ({ item, navigation }) => {

    const goToDetails = () => {
        navigation.navigate(RouteNames.transacrionDetails, { id: item.id })
    }

    return (
        <TouchableOpacity style={styles.listItem} onPress={goToDetails} >
            <InfoBlock text={"txId"} value={item.id} />
            <InfoBlock text={"data"} value={item.timestamp} />
            <InfoBlock text={"gas used"} value={item.gasUsed} />
        </TouchableOpacity>
    )
}

export default memo(TransactionItem);