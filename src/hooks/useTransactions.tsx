import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
interface Transaction {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    created_at: string;
}

interface TransactionContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>

interface TransactionProviderProps {
    children: ReactNode;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}:TransactionProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response =  await api.post('/transactions',{transactionInput});
        setTransactions([...transactions,response.data])
    }

    return (
        <TransactionContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionContext);
    return context
}