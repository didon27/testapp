import { useQuery } from '@apollo/client';
import React, { FC } from 'react';
import { View } from 'react-native';

import { GET_TRANSACTION } from '~/api/services/transaction';
import { InfoBlock, Loader } from '~/components';
import { ITransactionData, ITransactionProps } from '../types';

import styles from './styles';

export const initialTransaction = {
    id: '',
    timestamp: '',
    gasUsed: '',
    gasPrice: ''
}

const TransactionDetails: FC<ITransactionProps> = ({ route }) => {
    const { id } = route.params;
    const { data, loading } = useQuery<{ transaction: ITransactionData }>(GET_TRANSACTION, { variables: { id } });
    const transaction: ITransactionData = data?.transaction || initialTransaction;

    if (loading) return <Loader />

    return (
        <View style={styles.container}>
            <InfoBlock text={"txId"} value={transaction.id} />
            <InfoBlock text={"data"} value={transaction.timestamp} />
            <InfoBlock text={"gas used"} value={transaction.gasUsed} />
            <InfoBlock text={"gas price"} value={transaction.gasPrice} />
        </View>
    )
}

export default TransactionDetails;