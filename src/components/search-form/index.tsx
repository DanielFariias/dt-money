import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'

import * as z from 'zod'

import * as S from './styles'

const searchFormSchema = z.object({
  query: z.string().nonempty(),
})

type TSearchFormSchemaType = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TSearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: TSearchFormSchemaType) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
