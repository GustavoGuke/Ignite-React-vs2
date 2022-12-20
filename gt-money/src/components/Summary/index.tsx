import { SummaryContainer, SummaryCard} from "./style";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'

export default function Summary() {
  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#88b37e"/>
            </header>
            <strong>R$ 2.000,00</strong>
        </SummaryCard>

          <SummaryCard>
              <header>
                  <span>Saidas</span>
                  <ArrowCircleDown size={32} color="#f75a68"/>
              </header>
              <strong>R$ 2.000,00</strong>
          </SummaryCard>

          <SummaryCard variant="green">
              <header>
                  <span>Total</span>
                  <CurrencyDollar size={32} color="#fff"/>
              </header>
              <strong>R$ 2.000,00</strong>
          </SummaryCard>
    </SummaryContainer>
  )
}
