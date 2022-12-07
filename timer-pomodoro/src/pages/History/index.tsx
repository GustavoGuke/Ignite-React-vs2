import { useContext } from 'react'
import { cyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, StatusTd } from './style'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

export function History() {
  const { cycles } = useContext(cyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <StatusTd statusColor="green">Concluido</StatusTd>
                    )}
                    {cycle.interruptedDate && (
                      <StatusTd statusColor="red">Interrompido</StatusTd>
                    )}
                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <StatusTd statusColor="yellow">Em andamento</StatusTd>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
