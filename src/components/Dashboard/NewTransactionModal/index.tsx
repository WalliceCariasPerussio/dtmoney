import Modal from "react-modal";
import incomeImg from '../../../assets/income.svg';
import outcomeImg from '../../../assets/outcome.svg';
import closeImg from '../../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainer } from "./style";
import { useState } from "react";
import { useTransactions } from "../../../hooks/useTransactions";
import { useForm } from "react-hook-form";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps) {

    const {createTransaction} = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    const { register, handleSubmit } =  useForm();

    async function hendleCreateNewTransaction() {
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setType('deposit');
        setTitle('');
        setCategory('');
        setAmount(0);

        onRequestClose();
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button className="react-modal-close" type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container onSubmit={handleSubmit(hendleCreateNewTransaction)}>
                <h2>Cadastrar Transação</h2>

                <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Titulo' />
                <input value={amount} onChange={e => setAmount(Number(e.target.value))} type='number' placeholder='Valor' />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input   value={category} onChange={e => setCategory(e.target.value)} placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
            </Container>

        </Modal>
    )
}