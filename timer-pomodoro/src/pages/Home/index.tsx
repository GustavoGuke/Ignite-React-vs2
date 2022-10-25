import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  Startbutton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em</label>
          <TaskInput
            type="task"
            list="task-list"
            placeholder="Nome do projeto"
          />

          <datalist id="task-list">
            <option value="Estudo" />
            <option value="Descanso" />
          </datalist>
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <Startbutton disabled type="submit">
          <Play size={24} />
          START
        </Startbutton>
      </form>
    </HomeContainer>
  )
}
