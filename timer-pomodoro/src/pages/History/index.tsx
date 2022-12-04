import { useContext } from 'react'
import { cyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, StatusTd } from './style'

export function History() {
  const {cycles} = useContext(cyclesContext)
  return (
    <HistoryContainer>
      <pre>
        {JSON.stringify(cycles, null, 2)}
      </pre>
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
            <tr>
              <td>tarefa</td>
              <td>25 minutos</td>
              <td>há 2meses</td>
              <td>
                <StatusTd statusColor="green">Concluido</StatusTd>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>25 minutos</td>
              <td>há 2meses</td>
              <td>
                <StatusTd statusColor="green">Concluido</StatusTd>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>25 minutos</td>
              <td>há 2meses</td>
              <td>
                <StatusTd statusColor="green">Concluido</StatusTd>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>tarefa</td>
              <td>25 minutos</td>
              <td>há 2meses</td>
              <td>
                <StatusTd statusColor="green">Concluido</StatusTd>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
