import { Header } from "../../components/Header";
import Summary from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transaction(){
    return (
        <div>
            <Header />
            <Summary />
        <TransactionsContainer>
            <TransactionsTable>
               <tbody>
                <tr>
                    <td>Desenvolvimento de Sas</td>
                    <td>
                        <PriceHighLight variant="income">
                            R$ 3.000,00
                        </PriceHighLight>
                    </td>
                    <td>Venda</td>
                    <td>19/12/2022</td>
                </tr>
               </tbody>

                <tbody>
                    <tr>
                        <td>Combustivel</td>
                        <td>
                            <PriceHighLight variant="outcome">
                                    R$ - 280
                            </PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>19/12/2022</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Ipva</td>
                        <td>
                            <PriceHighLight variant="outcome">
                                R$ 500,00
                            </PriceHighLight>
                        </td>
                        <td>Venda</td>
                        <td>19/12/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
        </div>
    )
}