import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../NewTransactionModal';
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <span>GT-MONEY</span>
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}