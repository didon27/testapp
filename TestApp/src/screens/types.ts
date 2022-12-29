import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type ITransactionProps = {
    route: any
}

export type ITransactionsProps = {
    navigation: NativeStackNavigationProp<any, any>;

}

export type ITransactionData = {
    id: string;
    timestamp: string;
    gasUsed: string;
    gasPrice?: string
}

export type ITransactionItemProps = {
    navigation: NativeStackNavigationProp<any, any>;
    item: ITransactionData;
}