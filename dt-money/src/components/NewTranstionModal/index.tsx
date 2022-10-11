import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import * as zod from "zod";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>

      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>


        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            required {...register('description')}
          />
          <input
            type="number"
            placeholder='Preço'
            required {...register('price', {
              valueAsNumber: true
            })}
          />
          <input
            type="text"
            placeholder='Categoria'
            required {...register('category')}
          />

          <Controller control={control} name='type' render={({ field }) => {
            return (
              <TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton value='income' variant='income' >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton value='outcome' variant='outcome' >
                  <ArrowCircleDown size={24} />
                  Saídas
                </TransactionTypeButton>
              </TransactionType>
            )
          }} />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}