import * as Dialog from '@radix-ui/react-dialog'
import { Logo } from '../Logo'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderButton, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>Nova transação</HeaderButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
