import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';


export function NewTransactionModal() {
  return (
    <Dialog.Portal>

      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>


        <Dialog.Title>Nova Transação</Dialog.Title>

        <form>
          <input type="text" placeholder='Descrição' required />
          <input type="number" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

          <TransactionType>
            <TransactionTypeButton value='income' variant='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value='outcome' variant='outcome'>
              <ArrowCircleDown size={24} />
              Saídas
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}