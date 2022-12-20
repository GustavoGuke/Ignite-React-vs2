import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por Transações"/>
            <button type="submit">
                <MagnifyingGlass/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}