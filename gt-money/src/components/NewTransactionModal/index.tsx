import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <Close>
                    <X size={24}/>
                </Close>
                <form action="">
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />
                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'><ArrowCircleUp size={24}/> Entrada</TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'><ArrowCircleDown size={24}  /> Saida </TransactionTypeButton>
                    </TransactionType>
                    <button type='submit'>Cadastrar</button>
                </form>
                
            </Content>
        </Dialog.Portal>
    )
}