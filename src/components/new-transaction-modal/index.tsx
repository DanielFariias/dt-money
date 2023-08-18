import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay>
        <S.Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <S.ClossButton>
            <X size={24} />
          </S.ClossButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <S.TransactionTypeContainer>
              <S.TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
              </S.TransactionTypeButton>
              <S.TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Saida
              </S.TransactionTypeButton>
            </S.TransactionTypeContainer>

            <button type="submit">Cadastrar</button>
          </form>
        </S.Content>
      </S.Overlay>
    </Dialog.Portal>
  )
}
