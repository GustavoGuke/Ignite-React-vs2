import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <span>GT-MONEY</span>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}