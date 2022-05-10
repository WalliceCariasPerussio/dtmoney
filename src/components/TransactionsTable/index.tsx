import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../services/api";
import { ContentDestroy } from "./styles";
import { Container } from "./styles";



export function TransactionTable() {
    const {transactions} = useTransactions();
    function apagarTudo() {
        api.delete('/transactions');
    }
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id} >
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.created_at)
                                )}
                            </td>
                        </tr>
                   ))}
                </tbody>
            </table>
            <ContentDestroy>
                <button type="button" onClick={apagarTudo}>
                    Apagar Tudo
                </button>
            </ContentDestroy>
        </Container>
    )
}