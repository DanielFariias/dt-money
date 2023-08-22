import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'

import * as z from 'zod'

import * as S from './styles'

import { TransactionsContext } from '@/contexts/transactions-context'

import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string().nonempty(),
})

type TSearchFormSchemaType = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TSearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  })

  const onGetTransactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.onGetTransactions
  })

  async function handleSearchTransaction(data: TSearchFormSchemaType) {
    onGetTransactions(data.query)
    reset()
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Pesquisar por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Container>
  )
}

export const SearchForm = memo(SearchFormComponent)
