import * as S from './styles'

import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../new-transaction-modal'
import { useState } from 'react'

export function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleToggleModal() {
    setIsOpenModal((prevState) => !prevState)
  }

  return (
    <S.Wrapper>
      <S.Content className="container">
        <img src={logoImg} alt="" />

        <Dialog.Root open={isOpenModal} onOpenChange={handleToggleModal}>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onToggleModal={handleToggleModal} />
        </Dialog.Root>
      </S.Content>
    </S.Wrapper>
  )
}
