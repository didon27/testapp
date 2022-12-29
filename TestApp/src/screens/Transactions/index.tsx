import React, { FC, useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, TextInput, View } from 'react-native';
import { useQuery } from "@apollo/client";

import { useRefreshByUser } from '~/hooks/useRefreshByUser';
import { GET_TRANSACTIONS, SEARCH_TRANSACTIONS } from '~/api/services/transaction';
import TransactionItem from './components/TransactionItem';
import { Button, Loader } from '~/components';

import styles from './styles';
import { ITransactionData, ITransactionsProps } from '../types';

const ITEM_HEIGHT = 100;

const keyExtractor = (item: ITransactionData) => item.id;

const Transactions: FC<ITransactionsProps> = ({ navigation }) => {
    const [orderBy, setOrderBy] = useState('timestamp');
    const [hash, setHash] = useState('');
    const { data, refetch, loading } = useQuery<{ transactions: ITransactionData[] }>(hash.length ? SEARCH_TRANSACTIONS : GET_TRANSACTIONS, { variables: { orderBy, hash } })
    const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

    const getItemLayout = useCallback((data: any, index: number) => ({
        length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index
    }), [])

    const checkButtonStyle = (order: string) => {
        if (orderBy === order) {
            return styles.activeButton;
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Transactions hash...'
                style={styles.search}
                onChangeText={text => setHash(text)}
            />
            <View style={styles.filterContainer}>
                <Button
                    text='Timestemp'
                    style={checkButtonStyle('timestamp')}
                    textStyle={checkButtonStyle('timestamp')}
                    onPress={() => setOrderBy('timestamp')}
                />
                <Button
                    text='Gas used'
                    style={checkButtonStyle('gasUsed')}
                    textStyle={checkButtonStyle('gasUsed')}
                    onPress={() => setOrderBy('gasUsed')}
                />
            </View>
            {loading
                ? <Loader />
                : <FlatList
                    contentContainerStyle={styles.lists}
                    data={data?.transactions}
                    initialNumToRender={6}
                    windowSize={6}
                    maxToRenderPerBatch={6}
                    removeClippedSubviews={false}
                    getItemLayout={getItemLayout}
                    renderItem={({ item }) => <TransactionItem item={item} navigation={navigation} />}
                    keyExtractor={keyExtractor}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefetchingByUser}
                            onRefresh={refetchByUser}
                        />
                    }
                />}
        </View>
    )
}

export default Transactions;