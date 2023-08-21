import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as Dialog from '@radix-ui/react-dialog'

import * as z from 'zod'

import * as S from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '@/contexts/transactions-context'

const newTransactionFormSchema = z.object({
  description: z.string().nonempty({ message: 'Descrição é obrigatória' }),
  price: z.number().positive({ message: 'Preço é obrigatório' }),
  category: z.string().nonempty({ message: 'Categoria é obrigatória' }),
  type: z.enum(['income', 'outcome']),
})

type TNewTransactionFormSchemaType = z.infer<typeof newTransactionFormSchema>

interface INewTransactionModalProps {
  onToggleModal: () => void
}

export function NewTransactionModal({
  onToggleModal,
}: INewTransactionModalProps) {
  const { onCreateTransaction } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<TNewTransactionFormSchemaType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(
    data: TNewTransactionFormSchemaType,
  ) {
    try {
      await onCreateTransaction(data)
      onToggleModal()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Dialog.Portal>
      <S.Overlay>
        <S.Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <S.ClossButton>
            <X size={24} />
          </S.ClossButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              {...register('description')}
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              {...register('price', { valueAsNumber: true })}
              type="number"
              placeholder="Preço"
              required
            />
            <input
              {...register('category')}
              type="text"
              placeholder="Categoria"
              required
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <S.TransactionTypeContainer
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <S.TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </S.TransactionTypeButton>
                    <S.TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saida
                    </S.TransactionTypeButton>
                  </S.TransactionTypeContainer>
                )
              }}
            />
            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </S.Content>
      </S.Overlay>
    </Dialog.Portal>
  )
}
